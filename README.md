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

<img width="1365" height="617" alt="image" src="https://github.com/user-attachments/assets/7f597453-f02b-4198-a8bd-f8f775496ef9" />
<img width="1365" height="617" alt="image" src="https://github.com/user-attachments/assets/df653e10-47bb-4d43-ac5b-713e4cfb7e7b" />
<img width="1362" height="604" alt="image" src="https://github.com/user-attachments/assets/053dfdd0-a5aa-464c-90b3-fc0be91df823" />
<img width="1365" height="608" alt="image" src="https://github.com/user-attachments/assets/c03f0411-0f27-41ba-b7b7-d7dc2418ec5c" />
<img width="1365" height="608" alt="image" src="https://github.com/user-attachments/assets/111458bd-fceb-41bf-8b35-82db6054ab22" />
<img width="1365" height="608" alt="image" src="https://github.com/user-attachments/assets/a9db8305-58a1-4bf3-9593-fbb8fd7b37f5" />
<img width="1365" height="611" alt="image" src="https://github.com/user-attachments/assets/0db37bbe-43af-4709-9db9-079a4cc5926d" />
<img width="1365" height="613" alt="image" src="https://github.com/user-attachments/assets/7fb2a3c2-5029-42fa-8732-ca2e2bd512c8" />
<img width="1365" height="609" alt="image" src="https://github.com/user-attachments/assets/b248487c-49a9-4016-898e-043693619080" />
<img width="1365" height="610" alt="image" src="https://github.com/user-attachments/assets/6fdd1de5-b9d0-4d0f-86c9-e8886c5bb541" />
<img width="1363" height="606" alt="image" src="https://github.com/user-attachments/assets/8b3affd6-b416-4cd5-9126-b2ae91eb29db" />

### Mobile Responsive View

<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 02" src="https://github.com/user-attachments/assets/570e1c4f-e87e-4feb-803d-b52bb61c4413" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 02 (1)" src="https://github.com/user-attachments/assets/24919a3e-0777-4ef3-9a1d-6aa6e45a7be1" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 02 (2)" src="https://github.com/user-attachments/assets/f2fd966b-be55-494c-982e-192683b85daa" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 02 (3)" src="https://github.com/user-attachments/assets/5a4d7197-a91e-40bd-b76f-b11edf5e8c5c" />
<img width="738" height="1600" alt="WhatsApp Image 2026-05-24 at 18 07 03" src="https://github.com/user-attachments/assets/93562569-bb38-4381-92bd-2a04a59cb0fe" />

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

