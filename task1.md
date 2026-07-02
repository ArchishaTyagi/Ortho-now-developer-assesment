# Task 1 - GTM Event Schema

## Developer Assignment

**Project:** OrthoNow Consultation Landing Page

**Prepared By:** Priyanshu Mishra

**Technology Used:**
- HTML5
- CSS3
- JavaScript
- Google Tag Manager (GTM)
- Google Analytics 4 (GA4)


## GTM Event Schema


## Booking Form Funnel Tracking
### Step 1 – Clinic & Speciality Selected

**Trigger:** User selects Clinic and Speciality then clicks **Next**.

```json
{
  "event": "booking_step_complete",
  "step_number": 1,
  "step_name": "clinic_speciality_selected",
  "clinic_location": "Bengaluru - Whitefield",
  "speciality": "Back Pain Specialist"
}
```
| Event Name | Trigger Type | Key Parameters | GA4 Report / Audience |
|------------|--------------|----------------|-----------------------|
| consultation_form_started | Form Interaction | form_name, page_name, timestamp | Engagement Report |
| booking_step_complete | Custom Event (dataLayer) | step_number, step_name, clinic_location | Funnel Exploration |
| consultation_form_submitted | Form Submit | patient_name, phone_number, clinic_preference | Conversion Report |
| call_now_clicked | Click Trigger | phone_number, page_name, clinic_location | Google Ads Conversion |
| whatsapp_clicked | Link Click | page_name, campaign_source, device_type | User Engagement |
| patient_guide_download | Form Submit + File Download | patient_name, phone_number, pdf_name | Lead Generation |
| clinic_page_view | Page View | clinic_name, city, page_url | Location Performance |
| blog_scroll_25 | Scroll Trigger | article_title, scroll_depth, category | Content Engagement |
| blog_scroll_50 | Scroll Trigger | article_title, scroll_depth, category | Content Engagement |
| blog_scroll_75 | Scroll Trigger | article_title, scroll_depth, category | Engaged Audience |
| blog_scroll_100 | Scroll Trigger | article_title, scroll_depth, category | Reader Completion |

### Step 2 – Patient Details Entered

**Trigger:** User enters Name, Phone Number, Preferred Appointment Date and clicks **Next**.

```json
{
  "event": "booking_step_complete",
  "step_number": 2,
  "step_name": "patient_details_entered",
  "patient_name": "John Doe",
  "phone_number": "9876543210",
  "preferred_date": "2026-07-10"
}
```

### Step 3 – Booking Confirmed

**Trigger:** User clicks the **Confirm Booking** button and the booking is successfully submitted.

```json
{
  "event": "booking_step_complete",
  "step_number": 3,
  "step_name": "booking_confirmed",
  "booking_id": "BK123456",
  "clinic_location": "Bengaluru - Whitefield",
  "booking_status": "Confirmed"
}
```

## GA4 Funnel Exploration

The booking funnel in Google Analytics 4 will consist of the following steps:

1. Step 1 – Clinic & Speciality Selected
2. Step 2 – Patient Details Entered
3. Step 3 – Booking Confirmed

Using these three custom events, GA4 Funnel Exploration will show how many users move from one step to the next and where they drop off. This helps identify which step in the booking process causes users to abandon the form so it can be optimized.

## Google Ads Conversion

### Selected Conversion Event

**Event Name:** consultation_form_submitted

### Why this conversion?

The `consultation_form_submitted` event is the best conversion to import into Google Ads because it represents a completed lead. Unlike clicks or page views, this event indicates that the user has successfully submitted the consultation form and is genuinely interested in booking an appointment. Optimizing Google Ads campaigns using this conversion helps improve lead quality, maximize return on ad spend (ROAS), and generate more qualified patient enquiries.