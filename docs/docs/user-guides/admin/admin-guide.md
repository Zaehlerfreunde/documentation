# Admin Portal Guide

Here you will find the explanation for using the admin area.

The guide for use from the end customer's perspective can be found here (you will need to adapt the wording + screenshots for your purposes for further use):

[Private Customer](../private/private.md)

Here you will find the explanation for using our solution if you have SME customers or other B2B customers.

[Instructions for Zählerfreunde Business Customers](../business/business.md)

**Table of Contents:**

# 🔷 **1. Introduction**

### 🎯 **Purpose of the Admin Portal**

Welcome to the Admin Portal. This portal is your central management platform for all submetering, visualization, and billing processes. As an administrator, it allows you to:

-   Efficiently manage your end customers
-   Centrally organize meter readings and metering points
-   Create and manage tariffs
-   Control user roles
-   Set up your white-label branding
-   Process support requests in a structured manner

This guide will walk you through all functions step by step, so you can operate your system completely independently.

# 🔷 **2. Dashboard & Navigation**

### 🖥️ **2.1 Dashboard Overview**

After registration/login, the dashboard page opens, as it does for all users. If you then click on the letter in the top right, the user menu opens. As an employee, you have the option to click on "Admin Area." Please let us know which employees should receive admin access. Alternatively, you can access your admin URL: "yourcompany.[admin.zaehlerfreunde.de](http://admin.zaehlerfreunde.de/)"

![Screenshot 2025-07-09 at 15.25.38.png](/img/user-guides/admin/Bildschirmfoto_2025-07-09_um_15.25.38.png)

### 🗂️ **2.2 Navigation**

The left sidebar is your main navigation. It contains:

-   **Customer Management:** Manage all end customers/properties at a glance.
-   **Devices/Metering Points:** All installed meters and sensors including their status at a glance.
-   **Tariffs:** Define prices and billing logic.
-   **User Management:** Manage employee access and rights.
-   **Subscriptions:** Create your own subscriptions.
-   **Settings:** White-label branding, default texts, system configuration.
-   **Support**

# 🔷 **3. General**

### 👥 **3.1 Customer Overview**

**Purpose:** Here you create new end customers, manage their master data, and assign them metering points and tariffs. Each customer should have at least **one assigned metering point and tariff**.

### 📝 **3.2 Customer Details -** Users

-   List of all registered users with the timestamp of their last login and the number of logins.
-   End customers can register themselves or be created semi-manually by you through uploads. Alternatively, a fully automated API connection and creation of customer accounts is possible. You do not have to add all end customers individually. This function is particularly useful at the beginning for testing purposes to ensure a slow and secure transition. This allows the platform to be tested initially with a small, selected group of customers.
-   When a user is clicked, the registered properties of the end user and the connected devices are visible.

## 🏢 3.3 Properties

### 🎯 **Purpose of the "Properties" Function**

In **Properties**, you manage **real estate, buildings, or units** to which metering points (meters) are assigned. This serves to structurally map your real building and meter structure in the system.

**💡 Why is this important?**

-   Overview of all locations and units of your end customers.
-   Clear assignment of meters to buildings, apartments, or commercial units.
-   Basis for billing and consumption reports per property or unit.

---

## 👁️‍🗨️ **3.3.1 Properties Overview**

Under **Properties**, you will find a table with:

-   **Property Name:** e.g., "Musterstraße 12" or "Wohnanlage Nordpark".
-   **Address:** Street, Postal Code, City.
-   **Number of Metering Points:** How many meters are assigned to this property.
-   **Actions:** View, Edit, Delete.

![Screenshot 2025-07-09 at 15.38.52.png](/img/user-guides/admin/Bildschirmfoto_2025-07-09_um_15.38.52.png)

-   New properties can be created via the plus symbol, and people can then be invited directly to this property. This is particularly helpful if several people in the same household want access to the same property and do not want to set everything up twice.
-   Hierarchies: Whether it's a region with multiple properties with multiple tenants or single-family homes/small and medium-sized enterprises. With the hierarchical structure, you can configure buildings as desired in the admin dashboard, subordinate them, and distribute viewing rights.
-   When clicking on the property, additional information becomes visible, such as users and devices. Here you can also send invitations and see which tariff is connected or assign one.

![Screenshot 2024-08-05 at 14.50.20.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_14.50.20.png)

-   For business customers and tariff structures linked to the respective voltage level, this can be stored for correct cost calculation (see "Tariffs").
    ![Screenshot 2025-05-14 at 14.55.02.png](/img/user-guides/admin/Bildschirmfoto_2025-05-14_um_14.55.02.png)

## **🏠 3.3.2 _“What happens when a tenant changes?”:_**

-   You have the option to release devices for specific time windows: By clicking on the clock symbol, you can set from when the tenant, for example, should no longer have access to the meter data. The same meter can now be assigned to a new property with a new start date. This prevents old tenants from being able to see the consumption of subsequent tenants.

![Screenshot 2025-07-03 at 19.11.59.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_19.11.59.png)

## 🏢 **3.3.3 Best Practices**

✔️ Create **all buildings or units as properties** before assigning metering points.

✔️ Use clear and consistent property names (e.g., "Musterstraße 12, Apartment 3rd floor left").

✔️ Regularly check if all metering points are correctly assigned.

### 🔌 3.4 Devices

-   List of all connected devices.
-   Status of the devices (connected or not connected)
-   Possibility to add devices to individual properties.

Also: If you create devices automatically via our API, individual IDs can be stored. This serves for uniform identification of your devices.

![Screenshot 2025-04-24 at 16.25.22.png](/img/user-guides/admin/Bildschirmfoto_2025-04-24_um_16.25.22.png)

## 🏷️ **3.4 Tariffs/Contracts**

### 🎯 **Purpose of the "Tariffs" Function**

In Tariffs, you manage the legal relationships of your end customers. Each contract contains information on tariffs and price components. These can be created individually or via API and assigned globally.

---

### 👁️‍🗨️ **3.4.1 Contracts Overview**

The overview shows you:

-   **Contract Number or Name**
-   **Customer:** Which end customer the contract is assigned to.
-   **Tariff:** Which tariff is stored in the contract.

![Screenshot 2025-02-16 at 13.49.25.png](/img/user-guides/admin/Bildschirmfoto_2025-02-16_um_13.49.25.png)

---

### 🔧 **Functions in the Contracts Overview**

✅ **Create a New Contract**

1.  Click on **"Create New Contract"**.
2.  Select the customer from the list.
3.  Select the tariff to be assigned to the contract.
4.  Set the contract term (start date, optional end date).
5.  Enter further contract details (e.g., contract number, internal notes).
6.  Save.

---

✅ **Edit an Existing Contract**

-   Click on a contract → _"Edit"_.
-   Make changes (e.g., tariff change, term extension).
-   Save.

---

✅ **Delete a Contract**

-   Click on _"🗑️"_ next to the contract.
-   Confirm the cancellation in the pop-up.

---

### 📄 **3.4.2 Contract Details**

In the detail view, you can see:

-   **All contract data** (name, number, term, status).
-   **Tariff details:** Prices, validity.
-   **Linked metering points:** Which meters are assigned to this contract.

With this function, tariff products can be configured and created. Taxes and various other price components can be calculated together.

-   Tariffs can be created globally with flexible components and assigned to customer groups based on contracts.
-   Grid fees are automatically assigned and calculated.

![Screenshot 2025-02-16 at 13.50.53.png](/img/user-guides/admin/Bildschirmfoto_2025-02-16_um_13.50.53.png)

### ✉️ **3.5 Invitations (End Users)**

-   Here you can send invitations to specific people via email. This is particularly helpful if you want to test our platform at the beginning and introduce it slowly. You can invite selected customers to register, try out the platform, and provide feedback.
-   Once you are 100% satisfied, all end customers can easily register via a link. The registration can be linked on your website or sent via email to all customers, or it can be done automatically via our API connection.

### 👁️‍🗨️ **3.5.1 Invitations Overview**

In the **Invitations Overview**, you can see all previously sent invitations to end customers with:

-   **Email address** of the invited end customer
-   **Status:** pending (invitation not yet accepted) or activated
-   **Sent on:** Date of the invitation
-   **Actions:** Resend or delete invitation

**_FAQ: How do I manually create a property + device and invite a user to it?_**

**Attention – Important Note on Property Assignment**

Properties are automatically assigned to the user who creates them. If a user's account is deleted, all properties assigned to this user will also be irrevocably deleted. Please be particularly aware of this when managing employee accounts: if an employee creates properties and later leaves the company, their account must not be deleted to avoid the loss of the associated properties.

**Step 1:** In the admin portal, click on "Properties" and then on the "+" symbol. Then enter the details for the building. In the next step, subordinate properties can be added to this property (please ensure beforehand that the corresponding sub-properties **have already been created, e.g., several apartments in one building**).

![Screenshot 2024-08-05 at 14.52.58.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_14.52.58.png)

**Step 2:** Click on the building you just created and add a device and, if applicable, a tariff to the building:

![Screenshot 2024-08-05 at 14.56.06.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_14.56.06.png)

(Theoretically, an invitation can be sent directly (Step 3), but the end user must then add their devices themselves via the user dashboard, the same applies to the tariff details)

![Screenshot 2024-08-05 at 14.59.51.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_14.59.51.png)

![Screenshot 2024-08-05 at 15.07.54.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_15.07.54.png)

**Step 3:** Under the "Invitations" tab, select the "Plus" symbol. Enter the end user's email address and define the access role. You can choose between the following roles:

-   User: Receives all normal rights of an end user (can change and add new buildings, devices, and info).
-   View Access: Receives access to all consumption displays etc., but cannot adjust or add anything themselves.
-   Aggregated View: Shows monthly views but no live data (e.g., for janitors/facility managers).
-   Owner: Can do everything the "User" role can do and can add more users to their property, as well as delete the property.
    ![Screenshot 2024-08-05 at 15.25.39.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_15.25.39.png)

## 🔑 **3.5.2 Process from the Customer's Perspective**

1.  The customer receives an **email with the subject "Invitation to your customer portal"**.
2.  Clicks on the **activation link** in the email.
3.  Sets a **personal password**.
4.  Login to the customer portal is now possible.

# 🔷 4**. Management**

### 4.1 Admins

-   List of all employees with admin rights.
-   Possibility to add more employees as admins. These employees will then have the right to access the admin area and can see and edit all the functions described here.
-   ATTENTION! Please be careful not to accidentally add customers or other unauthorized persons here.
    ![Screenshot 2025-07-09 at 16.11.23.png](/img/user-guides/admin/Bildschirmfoto_2025-07-09_um_16.11.23.png)

### 4.2 Access Roles

-   At this point in the admin portal, you can create any number of roles to which certain rights are assigned regarding how users can access properties. In the following example, you can create a new role, e.g., "Janitor," to grant users with this role only data viewing rights. Multiple selections are possible.

![Screenshot 2025-05-14 at 14.31.25.png](/img/user-guides/admin/Bildschirmfoto_2025-05-14_um_14.31.25.png)

-   Further roles with different permissions can be created for your individual use case.

### 4.3 API

Our API can be used for many purposes. Primarily, it serves to save costs in the long run by eliminating the need for normal market communication (MSCONS/AS4) and forwarding data more quickly. Via this API, new properties and meters can be added fully automatically, and users can be created automatically. Bilateral synchronization between our system and your ERP/CRM systems is possible through this. The exact instructions for the API can be found here:

[Zählerfreunde API Integration](../../integrations/api-integration.md)

### 4.4 Subscription

Under this menu item, you can create various subscription models for your end customers as you wish. This allows the scope of functions to be restricted for desired subscriptions.

![Screenshot 2025-08-20 at 17.12.16.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.12.16.png)

**Step 1:** Create and price the desired scope of the subscription.

**Step 2:** Under "Payment Method," you can choose between 3 fields. Select "Stripe" to connect our or your Stripe account (please contact us for assistance). "Invoice": With this selection, you must issue the invoices to the customer yourself. "External Order Process": With this selection, you can provide a link where your customers can find an order process provided by you.

**Step 3:** Select the functions that should be made available to your end customers within the subscription.

Via the "Users" tab in the admin menu, you can then also manually assign a subscription to your users.

![Screenshot 2025-08-20 at 17.12.46.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.12.46.png)

New and existing customers will then see the selection options in the following view (of course, in your design):

![Screenshot 2025-08-20 at 17.14.12.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.14.12.png)

# ⚙️ 5. Settings

-   ATTENTION: Please note that all adjustments have a direct effect on all users and are visible.

In the settings, individual functions can be turned on or off. This modularity allows us to provide you with all available functions while giving you the ability to make adjustments quickly and easily yourself. Additionally, you can define which devices your customers can add.

![Screenshot 2025-08-20 at 17.25.25.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.25.25.png)

## 5.1 Functions

### **Security:**

-   "Invitation Required":

For testing purposes, you can use this function to prohibit general registration of end users. This allows you to invite a few test customers in a targeted manner before you launch your solution publicly. A customer will accordingly need an invitation email for a successful registration.

-   "Allow Invitation Request"

By activating this function, a user who was not previously invited but still comes across the app can request an invitation, which you can then accept or decline.

### **Dashboard:**

-   "Overview":

Activate and deactivate the aggregated monthly widgets in the end customer dashboard:

![Screenshot 2024-08-05 at 16.05.17.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_16.05.17.png)

-   "Current Device Status":

Activate and deactivate the device performance in the end customer dashboard.

![Screenshot 2024-08-05 at 16.05.42.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_16.05.42.png)

-   "Support Chatbox:"

Via the support chat function, your customers can communicate with us and have specific questions answered. Here we rely on personal answers and not on an AI.

![Screenshot 2025-08-20 at 17.30.38.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.30.38.png)

-   "Day-Ahead Prices":

Activate and deactivate the stock market price view regardless of the type of electricity tariff (otherwise, the stock market price is only displayed to customers with a dynamic tariff product).

![Screenshot 2025-08-22 at 16.55.18.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_16.55.18.png)

-   "Market Premium for Plants":

By connecting various interfaces, we have succeeded in developing a function with a unique selling proposition! With the real-time market premium, plant operators can view their market premium continuously (not just at the end of the month as before). This increases planning certainty and liquidity management (add-on module).

![Screenshot 2025-08-22 at 16.59.31.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_16.59.31.png)

### **Functionalities:**

![Screenshot 2025-08-22 at 17.05.57.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.05.57.png)

-   "Simulator":

With the **Simulator**, end customers can have suggestions calculated as to whether a solar system or a balcony power plant is worthwhile, when it will pay for itself, and have offers displayed. Here, too, you have the opportunity to earn affiliate commissions if your end customers buy a PV system via this function.

-   "Tips":

Under "**Tips**," electricity-saving tips are displayed. These can either be your own recommendations or ours, linked to products that can earn you potential affiliate commissions.

-   "Document Vault":

Conveniently provide invoices for download to customers via API or mail procedures, or store contract documents.

-   "Shop":

In the **Shop**, we offer products with which one can measure even more data and better visualize the household. If you make this accessible to your end customers, you have another opportunity to collect affiliate commissions. We can also gladly list your own products there.

-   "Property Comparison":

Particularly relevant to meet the requirements of the HKVO (Heating Costs Ordinance). Here, the consumption of individual subordinate apartments/properties is compared with the other apartments/properties of the parent building.

![Screenshot 2024-08-05 at 16.12.03.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_16.12.03.png)

-   **"**Automations/Smart Control":

This function will become the centerpiece of our solution in the future; it allows your end customers to benefit from PV surplus charging, price signal-optimized charging, and alarms/notifications. You, in turn, can develop your own business model from this (add-on module). Further down in the admin dashboard on the same page, you can select the rules your end users are allowed to access.

![Screenshot 2025-08-22 at 17.09.43.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.09.43.png)

User Dashboard View:

![Screenshot 2025-08-22 at 17.10.58.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.10.58.png)

-   "Reporting"

Activates the automatic reporting function for all end users.

-   "Property Creation"

Are end users allowed to create additional properties independently? If so, activate this function.

-   "AI Assistant:"

You can create an "agent" (under the admin menu item "Miscellaneous" in settings) that either simply provides assistance or actively intervenes in the HEMS.

Customers can use the assistant to:
-   Execute actions directly
-   Receive information about consumption, etc.
-   Activate rules in the HEMS

In the medium term, it should be possible to manage everything related to HEMS through very simple prompts via the AI, e.g.: "my car needs to be full by 9 am tomorrow, please use PV surplus if possible, otherwise grid power"... etc.

![Screenshot 2025-08-22 at 17.17.13.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.17.13.png)

End User View:

![Screenshot 2025-08-22 at 17.18.54.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.18.54.png)

-   "Energy Flow Diagram"

Activate this graphic for your customers:

![Screenshot 2025-08-22 at 17.20.54.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.20.54.png)

### **Tariffs**

Under these settings, you can specify what types of categories and tariffs the end user is allowed to add.

### **Device Connections**

Here you can set which devices your users are allowed to add and integrate themselves.

-   **Virtual Sum Meters (currently only activatable by Zählerfreunde):**

With this function, end customers can combine several meters/devices - please contact us to activate the function (add-on module).

## Display

![Screenshot 2025-08-22 at 17.24.17.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.24.17.png)

-   Dark Mode is available but must be activated first. In Dark Mode, the normal white background becomes dark gray and the black font becomes white.
    -   If you want to activate Dark Mode, you must add a logo below that will be displayed when an end user chooses to use Dark Mode.
-   You can easily replace your logo with the URL of your current logo. If you want to make fine adjustments like size changes, you can set the width (in pixels) next to it.
-   Here you can make adjustments to the corporate colors.
-   ATTENTION: Please note that all adjustments directly affect all users within this client and are visible.

### Notifications

Send invitation reminders or other notifications directly via the admin dashboard.

### Miscellaneous

Here you can create a demo account for your website and configure the AI assistant.

![Screenshot 2025-08-22 at 17.30.18.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.30.38.png)

-   **Onboarding for New Customers**
    -   We have developed a **click path including a tariff calculator and contract conclusion path** for you. You can book this add-on module to transfer new customers to your ERP system and to support tenant electricity projects with an individual application path.

![Screenshot 2025-09-01 at 15.47.55.png](/img/user-guides/admin/Bildschirmfoto_2025-09-01_um_15.47.55.png)

![Screenshot 2025-09-01 at 15.49.37.png](/img/user-guides/admin/Bildschirmfoto_2025-09-01_um_15.49.37.png)

![Screenshot 2025-09-01 at 15.48.13.png](/img/user-guides/admin/Bildschirmfoto_2025-09-01_um_15.48.13.png)

# 👩‍💻 Data Management

![Screenshot 2025-08-22 at 17.27.39.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.27.39.png)

### Data Import

-   Overview of data import options, including service providers such as metergrid, BlueMetering, and metiundo, as well as via CSV import.
-   The advantage here is that all existing customer files can be easily imported and integrated into the platform.
-   Adding historical consumption data: There is no additional work for you or the end customer, and existing data can continue to be used without being lost.

### Data Export

All data can, of course, also be exported as an XAP file. This helps in normalizing the data and is important for further applications that use the data (e.g., ESG software).

### Data Forwarding

Data forwarding is ideal for normalizing all data (smart meters as well as IoT devices) and continuously forwarding it to third parties, such as billing service providers. Via data forwarding, the data can also be fed into forecasting tools to optimize the electricity purchasing strategy.

The technical setup of the forwarding is explained step-by-step when you click on the green "Set up forwarding" button. Other formats can be added individually upon request.

![Screenshot 2024-08-05 at 16.31.59.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_16.31.59.png)

## **Additional Settings:**

### **Sub-Clients**

Allows the creation of sub-clients who receive their own admin access and can make design settings for their end users. (White-label within the white-label solution). You can, in turn, build your own business case from this (add-on module).

![Screenshot 2025-07-03 at 18.49.02.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_18.49.02.png)

After a new client has been added, either you or the new client themselves can create an individual URL, which then represents an independent solution separate from the parent client.

**Step 1:** Select the client for which you want to create a new subdomain from the menu on the left.

**Step 2:** Define the subdomain in the way explained on the page, copy the URL, and you're ready to go. Important: If you want to try out the new subdomain, make sure that you are logged out yourself and that a "Login page has been created".

![Screenshot 2025-07-03 at 18.48.46.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_18.48.46.png)

**Step 3:** Create Login Page: Here you define what the registration or login area for the sub-client should look like.

![Screenshot 2025-07-03 at 18.55.28.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_18.55.28.png)

**Step 4:** Just as with your own client, all settings and the overall appearance can also be configured for the sub-client.

-   "Support Mail": Here you can store your own support email, which will be displayed to your end users under "FAQ".
-   Under "FAQ" (end customer dashboard), your end customers will find answers to the most common questions. You are welcome to let us know if we should replace these with your own FAQs.

**Please contact us if you are interested in any "add-on modules"; we will be happy to send you an offer.**

### Tenant Electricity

You can easily create properties and add existing apartments/meters. You can also directly store corresponding tariffs. For this, select the type (mixed-price tariff or two-price tariff) and enter the corresponding details. The tariffs will now be used for the entire project and calculated with the corresponding meters. **Feel free to contact us, and we will support you in setting up the projects.**

In addition to the PV quota for tenants, we also provide the complete management of the projects for the owner and build the interface to the desired billing system.

---

All functions from the end customer's perspective can be found here:

[SME/B2B Guide](https://www.notion.so/KMU-B2B-Guide-13e7537d200e809480efe846d974309a?pvs=21)

That was the presentation and explanation of our solution. If you have any questions, you are very welcome to contact us at any time, and we will help you