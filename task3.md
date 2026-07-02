# Task 3 – Integration Design

## OrthoNow Consultation Landing Page Integration

**Prepared By:** Archisha Tyagi

## End-to-End Integration Architecture
The consultation form on the OrthoNow landing page is built using HTML, CSS, and JavaScript. When a user submits the form, the frontend first validates the entered information and triggers a `window.dataLayer.push()` event for Google Tag Manager (GTM). At the same time, the form data is securely sent to a backend API using an HTTPS POST request.

The backend API processes the request and checks whether a contact with the same phone number already exists in HubSpot CRM. Since HubSpot primarily deduplicates contacts using email, the backend performs a custom lookup using the phone number. If the contact exists, it updates the existing record; otherwise, it creates a new contact with the patient's name, phone number, clinic preference, source as **Google Ads – Consultation Landing Page**, and lead status as **New Enquiry**.

## WhatsApp and Google Ads Integration
After the contact is successfully created or updated in HubSpot, the backend sends a request to the Karix WhatsApp Business API. Karix delivers an automated confirmation message to the patient's registered phone number within two minutes. The message confirms that the consultation request has been received and that the OrthoNow team will contact the patient shortly.

Once the form submission is successfully processed, Google Tag Manager captures the `consultation_form_submitted` event from the dataLayer and forwards it to Google Analytics 4. This event is imported into Google Ads as a conversion action, allowing Google Ads campaigns to optimize for users who successfully submit the consultation form instead of only tracking clicks or page views.

## Biggest Failure Point and Fallback
The biggest failure point in this integration is the HubSpot contact creation or update process. Since the landing page collects only the patient's phone number and not email, HubSpot's default deduplication cannot be relied upon. To solve this, the backend should first search HubSpot using the phone number before creating a new contact. If HubSpot is temporarily unavailable, the backend should store the lead in a secure database or message queue and automatically retry the synchronization once HubSpot becomes available. This ensures that no patient enquiries are lost.


## WhatsApp SLA Monitoring
To ensure the WhatsApp confirmation message is delivered within two minutes, the backend should monitor every stage of the process, including API response times, queue processing, and message delivery status. Delays can occur due to network issues, HubSpot API failures, Karix API downtime, or high server load.

Monitoring tools such as application logs, API health checks, and alerting systems should be configured to detect delays or failures. If a message is not delivered within the expected time, the system should automatically retry the request and notify the support team through email or Slack. Dashboards displaying delivery success rate, average response time, and failed message count help ensure the service-level agreement (SLA) is consistently maintained.
