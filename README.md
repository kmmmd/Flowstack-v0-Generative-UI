# FlowStack - AI-Generated SaaS Landing Page

FlowStack is a modern, responsive, and high-fidelity SaaS landing page built entirely using AI-driven development practices. The project demonstrates the power of advanced **Prompt Engineering** and **Wireframe-to-Code UI Conversion** using **v0.dev** (Next.js, Tailwind CSS, and shadcn/ui components).

## 🚀 Live Demo & Repository Status
- **Framework:** Next.js (React) with Tailwind CSS
- **Design System:** Custom Wellness/Eco-Friendly Light Mode Palette
- **Interface Structure:** Multi-section implementation (Navbar, Hero, Feature Grid, FAQ Accordion, Contact Form)
 
https://v0-saas-landing-page-one-fawn.vercel.app/

---

## 📸 Interface Previews

### Desktop View

<img width="1365" height="602" alt="image" src="https://github.com/user-attachments/assets/cb861677-74e5-4416-b431-492ce29a86a9" />
<img width="1365" height="609" alt="image" src="https://github.com/user-attachments/assets/17d14673-8179-449f-8fca-a43a2cd69c2f" />
<img width="1365" height="610" alt="image" src="https://github.com/user-attachments/assets/fe145719-9c54-4774-bafb-0504312e1a4f" />
<img width="1365" height="611" alt="image" src="https://github.com/user-attachments/assets/d988b814-404a-48a0-bd40-c77cc9a89cc0" />
<img width="1365" height="609" alt="image" src="https://github.com/user-attachments/assets/ee64dc4d-c5ba-451b-96d7-207835c3d4a9" />
<img width="1365" height="616" alt="image" src="https://github.com/user-attachments/assets/07fffc36-20c2-4919-b4aa-07aa746bfe40" />
<img width="1363" height="609" alt="image" src="https://github.com/user-attachments/assets/8b9bf1b0-41d7-4ace-a265-0fad1e903bbd" />
<img width="1363" height="604" alt="image" src="https://github.com/user-attachments/assets/90c732c4-75d5-42a0-bb62-a810338f70af" />
<img width="1352" height="608" alt="image" src="https://github.com/user-attachments/assets/39e01c22-d3e3-47f2-b4ea-3be21017546b" />
<img width="1365" height="608" alt="image" src="https://github.com/user-attachments/assets/747dd18a-e802-4b61-b53a-ee608084a764" />
<img width="1365" height="610" alt="image" src="https://github.com/user-attachments/assets/7f274ada-93d3-4bbd-b209-77cfae09c99c" />


### Mobile Responsive View

<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 02" src="https://github.com/user-attachments/assets/e237de67-654b-4214-a2dc-373da6c4d275" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 02 (1)" src="https://github.com/user-attachments/assets/1d5a320f-f1c8-4adf-bd9d-5f9b94e205a9" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 02 20 06" src="https://github.com/user-attachments/assets/fbe170ac-f753-4b24-9923-8438fa14afcf" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 02 (2)" src="https://github.com/user-attachments/assets/7786b171-37b5-43bb-b81f-e82ac69c1026" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 02 (3)" src="https://github.com/user-attachments/assets/f1b7c027-2641-43c3-ac6e-9d2ed906f26d" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 03" src="https://github.com/user-attachments/assets/9e4c990e-ba9d-45e5-b35e-7322bc4f886c" />

---

## 🛠 AI Generation & Prompt Blueprint

This entire application interface was synthesized through iterative prompting. Below is the blueprint of every prompt used to engineer each section:

Add a modern, clean 'Contact Us' form section at the very bottom of this FlowStack landing page, right before the footer. 

1.  **Form Fields:** Include properly labeled input fields for "Full Name" (text), "Email Address" (email), and "Your Message" (textarea placeholder).
2.  **Submit Button:** Add a solid, high-contrast forest green (#1b4332) "Send Message" submit button.
3.  **Styling & Interactivity:** * Style the form container to match our existing light-mode aesthetic: crisp white background, rounded-2xl corners, and a soft shadow.
    * Give input fields a subtle border that changes to a spring green (#2d6a4f) outline when focused/clicked.
    * Add a smooth hover effect on the submit button so it lifts slightly or deepens in color when hovered.
4.  **Layout:** Make it a elegant layout—either centered on the page or with contact info (Email, Location) on the left and the form on the right. Fully responsive for mobile devices.


Complete the interactivity requirements by adding an interactive FAQ (Frequently Asked Questions) section with an accordion element.

1. Location: Place this FAQ section right above the newly created Contact Form.
2. Structure (Accordion): Include 3-4 standard questions (e.g., "What is FlowStack?", "How does the 14-day trial work?", "Can I cancel my subscription anytime?").
3. Interactivity: Make it a fully functional accordion—when a user clicks on a question, it should smoothly expand to reveal the answer, and collapse when clicked again (or close the previous one). Add a plus/minus (+ / -) or chevron icon next to each question that rotates smoothly upon expansion.
4. Styling: Use the same clean light-mode theme: dark forest green (#1b4332) for question text, soft ivory/white for backgrounds, and subtle green accents.

## 📱 Responsive & Design Observations
Breakpoint Transitions: Elements fluidly scale down from high-width desktop views into touch-friendly, single-column stacked cards on mobile viewports.

Micro-interactions: Interactive elements feature custom Tailwind state actions, including focus transitions for inputs, hover-lifts for CTA elements, and asset rotation for accordion chevrons.

Layering Design: UI overlays like floating badges are absolutely positioned over data visualizations to mimic real-time event updates, offering modern visual depth.

Developed as part of an advanced generative UI design assignment, showcasing the capabilities of prompt engineering in full-stack frontend design.

