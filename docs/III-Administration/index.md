<style type="text/css">
	ol{ list-style-type: decimal !important }	

</style>



<b>Overview</b>
===

<br />

Security is of vital importance in making any system trustworthy. The proper administration
of a system would result in a high degree of integrity and makes a system secure and
dependable. ETRACS implements a strong security architecture that strictly defines the
boundaries between the LGU, organizations, functions, terminals and users.


Administration is the process of defining access control on system resources which adheres
to a defined security structure. It is generally composed of two parts, namely:


- <b>Authentication</b> - is the procedure of identifying the validity and authenticity of
anyone that accesses the system. This is currently implemented using the standard
username and password model. However, fingerprint identification and other means
of authentication could easily be integrated.
- <b>Authorization</b> - is the process of giving anyone permission to access resources and to
execute system functions. It is implemented using a Role-Base model. Built-in roles
such as COLLECTOR are already created with the corresponding permissions defined.


ETRACS Administration is implemented using the following, namely: Roles, Users,
Organization, User Groups, Terminals and Queue System.

<br />
<br />
<br />

<b>Terminal</b>
===

<br />

Terminal refers to the personal computer that will be used to connect to ETRACS. As long as
there is connectivity, whether through a public internet or through VPN, an ETRACS client
can connect to the server. Because of this, only the registered clients should be allowed to
access the server. This is done by assigning keys to the client and the client acknowledges by
submitting their MAC address as this is the only way to identify the machine. Although this is
not hack-proof, this is just an additional layer of security in the system.

<br />
<br />
<br />

<b>Roles, User Groups and Permissions</b>
===

<br />

Before a user can do some transactions in the system, they need to be authorized to
perform a task. This is done by assigning roles. Roles are already built-in to the system and
are dependent on the application developer. Roles are usually named on actors or doers of
an action, or a position like MANAGER or APPROVER. Sometimes the role names are noun-
like such as MASTER or SHARED which is usually used for master files or shared permissions.
To avoid conflicting roles, roles are separated by domain. Domain refers to a business subject
area or a functional group like TREASURY or BPLO. The combination of domain and role is
termed as a User Group. Users are bound, or become members of user groups. A user group
can be limited further by organization, which means when a user logs in to an organization,
the roles for that organization will apply.

<br />
<br />
<br />

<b>Organization</b>
===

<br />

ETRACS is not a stand-alone system. In fact, the idea is to allow ETRACS to be networkable to
other ETRACS servers. Thus the root organization of ETRACS refers to the main organization
or the LGU. Other Organizations include the barangays, terminals, hospitals etc. For a
province, the root organization is the province and sub organizations would be the
municipalities. So the system will know what organization the user wants to login to, the org
name must be specified in the client code in the login screen. (See screen below). If not
specified, the root organization will be used.

<br />

![alt text][org]

<br />
<br />
<br />

<b>Updating Organization</b>
---

<br />

During installation the type of LGU was specified. Different LGU types have different ways of
managing.

<br />
<br />

- ### <b>Editing LGU information</b>

	<br />

	1. Go to <b>Administration</b> in the home screen.

	<br />

	![alt text][admin] 

	<br />
	<br />

	2. Click <b>Organization</b>. If this was for a city setup, you will be able to see the city and
barangay.

	<br />

	![alt text][organization] 

	<br />
	<br />
	<br />

<b>Managing City Organization</b>
---

<br />

- ### <b>Editing City Information</b>

	<br />

	If the setup was for City, click on <b>City</b> under <b>Organization</b> to open the screen below. Click <b>edit</b> ![alt text][edit] to edit the necessary information. Click save ![alt text][save] when completed.

	<br />

	![alt text][city]

	<br />
	<br />
	<br />

- ### <b>Adding barangays</b>

	<br />

	1. To view the barangay listing, click Barangay under Organization.

	<br />

	![alt text][barangay] 

	<br />
	<br />

	2. To edit the barangay, highlight and double click on the specific barangay and click <b>edit</b> ![alt text][edit] to edit the necessary information. Click <b>save</b> ![alt text][save] when completed.

	<br />

	![alt text][barangay2]
	
	<br />
	<br />

	3. To add new barangay, click <b>new</b> ![alt text][new] under <b>Barangay</b> tab. Fill up the necessary information. Click <b>save</b> ![alt text][save] when completed.</li>

	<br />

	![alt text][barangay3]
	
	<br />
	<br />

	4. To delete barangay, select/highlight the specific barangay and click <b>delete</b>. A confirmation dialog box will pop-up, click <b>Yes</b> to proceed. </li>

	<br />

	![alt text][barangay4] 

	<br />
	<br />
	<br />

<b>Managing Province Organization</b>
---

<br />

- ### <b>Editing Province Information</b>

	<br />
	
	If the province setup was chosen, click on <b>Province</b> under <b>Organization</b>. Click <b>edit</b> ![alt text][edit] to edit the necessary information. Click <b>save</b> ![alt text][save] when completed.

	<br />
	<br />

- ### <b>Managing Municipality</b>

	<br />

	Click Municipality under <b>Province</b> to view the municipality list. Click <b>edit</b> ![alt text][edit] to edit the municipality’s information. Click <b>new</b> ![alt text][new] to add municipality and fill up the necessary information. Click <b>save</b> ![alt text][save] when completed.

	<br />
	<br />

- ### <b>Editing Barangays</b>

	<br />

	Add first the municipality before adding barangays. That is because barangays are associated with the municipality. Just follow the steps on adding municipality above. After adding municipality, click <b>new</b> ![alt text][new] to add barangay. Fill up the necessary informations. Specify the municipality to which the barangay belongs. Click <b>save</b> ![alt text][save] when completed.

	<br />
	<br />
	<br />

<b>Managing Municipality Organization</b>
---

<br />
<br />

- ### <b>Editing Municipality and Province</b>

	<br />

	If the selected setup is for municipality, the root org would be municipality. Go to <b>organization</b> and edit <b>Municipality</b>. Edit the necessary information under Municipality Information tab as well as the Province Information tab.

	<br />

- ### <b>Adding Barangays</b>

	<br />

	Similar to the procedure in the preceding sections, edit also the barangay for the municipality.

	<br />
	<br />
	<br />

<b>Administrator Account</b>
===

<br />

The SystemAdministrator’s account is the only account recognized by the system right out of the box. Only the system administrator at this time can add the users and define roles.

<br />
<br />
<br />

<b>Terminal Registration</b>
---

<br />

1. Run the client.

	<br />

	![alt text][client]

	<br />
	<br />

2. Since this terminal is not yet registered, the system will require you to register a
terminal. Choose <b>Register new terminal</b> and click <b>Next</b>.

	<br />

	![alt text][newterminal]

	<br />
	<br />

3. In the Terminal Key, enter <b>T001</b> and in the “Registered By:”, enter ADMIN. If 	successful, the login screen will appear.</li>

	<br />

	![alt text][registered]

	<br />

	<i>(Note: T001, T002, T003 are the system default terminal keys.</i>

	<br />
	<br />
	<br />

<b>Logging-In</b>
---

<br />

In the login screen, enter the following:

<br />

Username: ADMIN


Password: !1234#

<br />

<i>(Note: !1234# is the system default temporary password for new user account.)</i>

<br />

If credentials are correct, the system will prompt you to change your password (See image below). Specify a password that is hard to guess. If you forget your password, it will be reset in the backend.

<br />

![alt text][password]

<br />
<br />
<br />

<b>Managing Terminals</b>
---

<br />

Terminal keys are randomly–generated keys. This is given to the computer during terminal registration. The terminal key is associated against the network interface cards MAC address after successful registration. This association will never change unless the NIC is replaced or damaged or the terminal key is deleted from the database. Before registration the Mac Address next to the terminal key is blank. After successful registration, the Mac Address should appear which means this terminal key cannot be used anymore. If you want to replace the mac address, click on Unassign and give the terminal key to another client for registration.

<br />

![alt text][confirmpass]

<br />
<br />

- #### <b>Generate Keys</b>

	<br />

	1. Go to Administration> Terminals > Click <b>Generate Keys</b>

	<br />

	![alt text][generate]

	<br />
	<br />

	2. Enter the no. of terminal keys to generate, then click <b>OK</b>.
	
	<br />

	![alt text][terminalkeys]
	
	<br />
	<br />

	3. Copy the unassigned key/s and distribute to new users to be used on terminal registration.

	<br />

	![alt text][terminalreg]

	<br />
	<br />
	<br />


<b>Managing Users</b>
---

<br />

A <b>user</b> is someone who is registered in the system. A registered user can then be referenced in any transactions and processes. To be able to access the system a user must be authenticated and identified first by the system. To achieve this, users must have a username and password. The username might be visible but the password must be private to the user. Only the admin can create users.

<br />
<br />
<br />

- ### <b>Creating User Accounts</b>

	<br />
	
	1. From the homescreen, click <b>Administration</b>.
	
	<br />

	![alt text][administration]

	<br />
	<br />

	2. Click <b>Manage Users</b>.

	<br />
	<br />

	![alt text][manageusers]

	<br />
	<br />

	3. On the Manage Users tab, click <b>new</b>  ![alt text][new]

	<br />

	![alt text][managenew]

	<br />
	<br />

	4. The fields that are marked with * are required fields and must be filled up. The user txn code is a special code that is used in some parts of the system. This is a short text, preferably a user’s initial.  If specified, this will appear as prefixes in some transactions so the transaction will know it is prepared by that user. For example, in collection remittance, a numbering system that includes the user name is great because they can immediately pinpoint that remittance is created by that user. Username must be unique so duplicates cannot occur. Click <b>Save</b> once completed.

	<br />

	![alt text][newuser]

	<br />
	<br />
	<br />

- ### <b>Assigning Roles</b>
	
	<br />

	1. To add a role for the user, open the user record as above and click <b>Edit</b>:

	<br />

	![alt text][edituser]

	<br />
	<br />

	2. Click <b>Roles and Permissions</b> and click <b>Add</b> (lower left corner), prompting you to add a role.

	<br />

	![alt text][addrole]

	<br />
	<br />

	3. Refer to the image below:

	<br />

	- <b>Username</b> - refers to the name of the member.

	<br />

	- <b>User Group</b> - A combination of domain and role. Tip: To speed up lookup, type the domain in the User group textbox then press enter.

	<br />

	- <b>Security Group</b> - If specified, only the allowed permissions will be accessible.

	<br />

	- <b>Org Name</b>	 - If specified, this authorization will only be applicable for the organization specified.
	
	<br />
	<br />

	![alt text][adduser]
	
	<br />
	
	On the <b>User Group</b> field, click lookup ![alt text][lookup] to show you the list of usergroups.
	
	<br />
	<br />

	4. Select a specific group from the list and click <b>OK</b> from the Lookup Usergroup screen.

	Click <b>OK</b> again from the <b>‘Add User Group’</b> screen.
	
	<br />

	![alt text][usergroup]
	
	<br />
	<br />

	5. To add more roles, click <b>Add</b> and follow the steps above. To delete a role, click <b>Remove</b> and click <b>Yes</b> when prompted. Once finished, click <b>Save</b>.
	
	<br />

	![alt text][remove]
	
	<br />
	<br />

	6. After adding roles, click ![alt text][close] to exit.
	
	<br />

	![alt text][close2]
	
	<br />
	<br />

	- #### <b>Resetting Password</b>

	<br />

	In case a user forgets their password, the admin is the only one who can reset it. ETRACS does not have the capability to recover passwords because password encryption cannot be reversed. To do this, login as admin and go to the Administration> Manage Users> Open the user’s record> Click <b>Reset Password</b>. Specify a password and let the user know the password you specified. Ask the user to login using their username and password specified. If successful, the system will prompt the user to provide another password.
	
	<br />

	![alt text][resetpass]
	
	<br />
	<br />
	<br />

<b>Managing Roles</b>
---

<br />

Roles are already pre-defined in the system (as part of the developer’s design) and there are already actions related to the role. To view these roles, click on ![alt text][mainmenu] Main Menu > Administration > User Groups.

<br />

![alt text][usergroups]

<br />
<br />
<br />

<b>Managing Security Groups & Customizing Permissions</b>
---

<br />

Security groups allow the user to customize permissions for a role. If the administrator is managing a huge organization, this grouping is a time-saver for users having the same roles but different access permissions. These are the two ways to create security groups:

<br />

1. <b>Through User Groups</b>

	a.) From "User Groups", select and double click the domain that you want to create security groups for, then click <b>Manage Security Group</b>.
	
	<br />

	![alt text][securitygroup]
	
	<br />
	<br />

	b.) Click <b>Add</b>, enter the name of security group when prompted, and click <b>OK</b>. Then on the permissions, check or uncheck which are applicable. Click on <b>OK</b> to save this security group.
	
	<br />

	![alt text][addsec]
	
	<br />
	<br />

2. <b>Through opening the record of the user</b>

	a.) Go to Home > Administration > Manage Users > Select the user account> Edit> Roles and Permissions> Edit> Select Security Group> Click ![alt text][threedots] to open permissions then check or uncheck which are applicable> Click OK.
	
	<br />

	![alt text][permissions]
	
	<br />
	<br />
	<br />

<b>Using ETRACS client</b>
===

<br />

<b>Overview</b>
---

<br />

This section describes the basic elements of the ETRACS client to familiarize the user on the user interface.

<br />
<br />

<b>The Registration Screen</b>
---

<br />

If you are using the system for the first time, this screen will appear. Click on <b>Register new terminal</b> and ask for an available terminal key from the system administrator.

<br />


![alt text][regnew]

<br />
<br />


Once registered, this screen should not appear anymore. If for some reason, this appears, and you know this is already registered, try <b>Recover existing Terminal</b>. If it cannot be solved, the network settings may have changed. You may need to ask the admin for a new terminal key and register it again.

<br />
<br />
<br />

<b>The Login Screen</b>
---

<br />

The login screen is the first screen you will always see. It will require you to enter your username and password. If you want to log in to another org, you must specify the org code in the client code. Ask the system administrator regarding the organization codes.

<br />

![alt text][regnew]

<br />

If login is successful, the main screen should appear.

<br />
<br />
<br />

<b>The Main Screen</b>
---

<br />

![alt text][mainscreen]

<br />

1. <b>Toolbar Menu</b> - Displays a dropdown menu.

2. <b>Quick Launcher</b> – The quick launcher allows you to type in some keywords to launch transactions

3. <b>Quick Launcher Directory</b> - Displays the available quick launcher codes

4. <b>Main Menu Button</b> – If the main menu is not visible click this to display the main menu. By default the main menu is hidden.

5. <b>Barcode Launcher</b> – There are transactions that can be launched by barcodes. You will need a barcode reader for this to get maximum effect.

6.  ?????

7. ?????

8. <b>Main Menu</b> - Displays a hierarchical organization of menus organized as follows:

	a) <b>Master</b> – refers to master files
	
	b) <b>Transactions</b> – refers to transactional listing screens
	
	c) <b>Reports</b> - refers to printable reports
	
	d) <b>Rule Management</b> – refers to rule management screens
	
	e) <b>Settings</b> - refers to different types of settings

9. <b>Window Panel</b> – If several windows are opened, you can switch through the windows by clicking on the title

10. <b>Logo</b> – This can be changed to a more appropriate logo for the LGU.

11. <b>Home Panel</b> – This displays selected icons for launching. Usually displayed here are the most common ones.

12.  <b>Username</b> – indicates the current user using this client

13.  <b>Client</b> – displays the current organization logged into.

14.  <b>Terminal</b> – Displays the current terminal id, which is also the terminal key

15.  <b>Mode</b> – Normally online mode. A feature is planned to allow offline transactions that will not require accessing the server.

<br />
<br />
<br />

<b>Profile Management</b>
===

<br />

To view the profile click on the System menu in the toolbar menu.

<br />

![alt text][profile]

<br />

<b><u>Change Password</u></b>


If password needs to be changed, click on Change Password and update the password. This password will take effect on the next login.

<br />

<b><u>Module Manager</u></b>

<br />

<b><u>Preferences</u></b>


Displays the login information and different information needed designed for support purposes.

<br />

<b><u>Create Offline Profile</u></b>


Allows a client to work in offline mode. Not yet functional.

<br />

<b><u>Suspend</u></b>


Allows the user to suspend the screen. If the user takes a break but does not want anyone to access the client, the suspend will freeze the screen and requires the password of the user doing the suspend to resume.

<br />

<b><u>Restart</u></b>


This will logoff the user’s session and reboot the client.

<br />
<br />

<b><u>Shutdown</u></b>


This will logoff the existing session and close the client

<br />

<b><u>Logoff</u></b>

<br />

This will logoff the existing session and close the client

<br />
<br />
<br />

### <b>Navigation</b>

<br />

There are many ways to access the transaction dependent on the developer who made the plugin:

<br />

<b><u>Main Menu</u></b> – To launch main menu actions, navigate through the main menu, select an item and double click the item or press Enter.

<br />

<b><u>Quick Launcher</u></b> – Position mouse on the quick launcher text box then click Enter.

<br />

<b><u>Home Panel</u></b> - Select an icon and double click on the icon.

<br />

<b><u>Toolbar Menu</u></b> – Dropdown menu and select by clicking

<br />

<b><u>Barcode Launcher</u></b> – Click the barcode launcher

<br />
<br />
<br />

### <b>Navigation</b>

<br />

Menu Bar Navigation

<br />

Tree Navigation

<br />

Quick Launcher Navigation

<br />

Opening Form from List

<br />
<br />
<br />

### <b>Input Controls</b>

<br />

<u>List View</u>

<br />

<u>Text Field</u>

<br />

<u>Date Field</u>

<br />

<u>Lookup Field</u>

<br />

<u>Radio Field</u>

<br />

<u>Check Box Field</u>

<br />

<u>DropDown List</u>

<br />

<u>Grid or Table</u>

<br />

<u>Quick Launcher</u>

<br />
<br />
<br />

<b>Entity Management</b>
===

<br />

<b>Overview</b>
---

<br />

Entity refers to a person, group or organization that conducts business with the local government. In previous versions of ETRACS, this was termed as the payer or taxpayer. Entity can be an owner of properties or business therefore it is widely used throughout the system. Because of this, there is a high probability of duplicate entries that is why careful consideration has to be done to ensure that this will be minimized. There are three types of entities as follows:

<br />

- <b>Individual</b> - refers to an individual person. This is the most common entity in the 	system.

- <b>Juridical</b> - refers to an organization or non-individual entity. This can be classified further as Corporation, Cooperative, Association, Religious, Foundation or Partnership.

- <b>Multiple</b> - refers to a group combination of individual or sometimes juridical entities.

It is represented as a single unit entity. For example in real property there are sometimes multiple owners for a single property. Since there can only be one owner associated with a property, we create a multiple entity composing individual entities and use this instead as the owner of the property.

<br />
<br />
<br />

### <b>Roles and Permissions</b>

<br />

The following are the roles needed for this module.

<br />

DOMAIN: ENTITY

<br />

![alt text][roles]

<br />

To configure this role further, check or uncheck the necessary permissions or customize it by adding security groups.

<br />
<br />

<b>Individual Entity</b>
===

<br />

### <b>Adding an Entity</b>

- To add an individual entity, go to <b>Main Menu</b> and select <b>Master Data</b> > <b>Entities</b> > <b>Individual</b> <i>(See diagram below)</i>. This will display a listing of individual entities. Click <b>New</b> ![alt text][new] to add a new record.
	
	<br />

	![alt text][individual]

	<br />
	<br />

- The new individual entity initial screen will be displayed. It asks first for basic information like last name, first name, and middle name. Fields marked with * are required. Once completed, click on the Next button.

	<br />

	![alt text][basicinfo]

	<br />
	<br />

- The system first attempts to check for duplicate matches if any. Click “Retry” if there is a duplicate entity, otherwise click “Proceed”.

	<br />

	![alt text][duplicate]

	<br />
	<br />

- If there are no matches the system immediately directs you to the screen to complete the information.

	<br />

	![alt text][completeinfo]

	<br />
	<br />

- Most fields are input boxes and filled by typing in text. The suggested controls like religion, citizenship and profession displays existing information which you can simply choose from. The address field is a special entry because address is not a simple plain text and there are several uses for it in the system. To edit the address, click on the  address editor next to the address box to display a popup entry. Choose the type of address you want to add. Local refers to local address (within the LGU) so barangay is specified.  If it is outside the LGU, use non-local. 

	<br />

	![alt text][address]

	<br />
	<br />

- To make the system more accurate, it is suggested to add photos of the person so that in case there is a possible duplicate entry, it will be much easier to distinguish with the picture. There are two ways you can add photos, by uploading files or by capturing using a webcam.

	<br />

	![alt text][photo]

	<br />
	<br />

- Once completed, click on “Save” and the system will assign the entity no. This is the unique identifier of the person.

	<br />
	<br />
	<br />

### <b>Checking for Duplicates</b>

<br />

Having a unique single record of a person in the system is ideal because it helps in referencing transactions and improves the quality of the records. If this can be achieved, we will be able to know the transactions for a particular person which can be shared across domains for example – real property information might be important in business permits and licensing if we are investigating if they reported the correct amount. Therefore, duplicate entries are not desirable because there is no way a system will be able to reference it. However this is simpler said than done because during day to day operations, especially during peak times, misspellings or wrong entries could occur.  


To reduce the possibility of duplicates, it is highly recommended that an LGU provide a separate department or personnel who will ensure that possible duplicates are checked before adding it in the database. However, because most LGUs cannot provide this at the moment, there is a built-in mechanism provided in the system to check for possible duplicate matches. It checks for possible matches by comparing the strings and providing a score of exactness. The higher score means higher probability being the same. A 100% will give an exact match for lastname and firstname. This gives a chance for review and alerts the person entering the record.

<br />

![alt text][duplicates]

<br />

If the encoder is sure that this is another person, click “Proceed” to ignore the message. However, if it is an exact match, the system will not allow it to continue. In this case, a higher authority is needed having ENTITY.APPROVER role to encode the record.

<br />
<br />

### <b>Updating Records</b>

<br />

When updating records, we need to search first the record we want to update.

<br />

- Go to the Individual Entities list <b>Master Data > Entities > Individual</b>. This will display the list of individual entities. Use the search box in the upper right to search for the records based on the name.

	<br />

	![alt text][individuallist]

	<br />
	<br />

- To open the entity record, highlight the record then click “Open”  or double click the item.

	<br />

	![alt text][openrecord]

	<br />
	<br />

- To edit the record, click on the <b>Edit</b> button ![alt text][edit]. Edit the necessary entries and click the <b>Save</b> button ![alt text][save] to commit the data.

	<br />

	![alt text][editrecord]

	<br />
	<br />

- In case you want to edit the name, click on <b>Edit Name</b>. We need to run the matching records again similar to adding a new entry to ensure that the new information does not have duplicate matches. Edit is allowed provided you have sufficient permission.

	<br />

	![alt text][editname]

	<br />
	<br />

- The upper tabs are transactions related to the person. It lists businesses owned, leased buildings, real properties owned or they are part owner and payments. Since ETRACS is a pluggable platform, other information might be coming from other plug-in modules. This will give a complete picture of the transactions for a taxpayer.

	<br />

	![alt text][uppertab]

	<br />
	<br />
	<br />


<b>Juridical Entity</b>
===

<br />

A juridical entity is applicable for non-person entity. There are several types of juridical entities: Corporation, Cooperative, Association, Religious, Foundation or Partnership. Juridical is usually used in business applications and to some degree real property ownership.

<br />

- To add a juridical entity, go to <b>Main Menu > Master > Entities > Juridical</b> and click <b>New</b> ![alt text][new]. Fill up the necessary info and click save ![alt text][save] .

	<br />

	![alt text][createjuridical]

	<br />

	<b>Entity No</b> – created after the record is saved.
	<br />
	
	<b>Name</b> – name of the organization.
	<br />
	
	<b>Organization Type</b> – select a type of organization.
	<br />
	
	<b>Address</b> – Edit the address editor similar to “individual entity”. 
	<br />
	
	<b>Date registered</b> – Not optional. If provided just fill in the date the business was 	registered.
	<br />
	
	<b>Administrator Name</b> – applicable in business applications. Normally the president or 	treasurer for companies.
	<br />
	
	<b>Contact Info</b> – provide the necessary information, mobile, phone and email.

	<br />
	<br />
	<br />

<b>Multiple Entity</b>
===

<br />

Multiple entity refers to a group of individual entities which is treated as a single unit. This is usually used for real property ownership like spouses and heirs of.

<br />

- To create a new multiple entity, go to <b>Main Menu > Master > Entities > Multiple Ownership</b> and click <b>New</b> ![alt text][new]. Fill up the necessary info and click save ![alt text][save].

	<br />

	![alt text][multiple]

	<br />
	
	<b>Acct No </b> - automatically generated once it is saved. 
	<br />

	<b>Name </b> -  generated based on the member’s listing. 
	<br />

	<b>Address </b> - The address for this entity. Normally the address of the representative can 	be assigned.

	<br />
	<br />

### <b>Adding Members</b>

<br />

Member entities must be added as they comprise the individual entities.

<br />

- Click the lookup button ![alt text][lookup] to show all the entity records, select the entity you want to add and click <b>OK</b>.

	<br />

	![alt text][allentity]

	<br />
	<br />

- A faster way is to type a few letters of the name under “Member Name” and click the lookup button ![alt text][lookup] to filter the result.
	
	<br />

	![alt text][membername]

	<br />
	<br />

- Select the entity you want to add and click <b>OK</b>.

	<br />

	![alt text][addentity]

	<br />
	<br />

- This will add the person into the member’s list. At the same time it will also populate the name. You can also change the prefix or suffix and check the effect in the name box.

	<br />

	![alt text][addmember]

	<br />
	<br />

- To remove a person from the member’s list, highlight the entry you want to delete and press the Delete button on your keyboard. A confirmation message will appear. Click <b>Yes</b> to delete the entry.

	<br />

	![alt text][removemember]
















[org]: ./images/3-a.png
[admin]: ./images/3-b.png
[organization]: ./images/3-c.png
[edit]: ./images/edit.png
[save]: ./images/save.png
[new]: ./images/new.png
[city]: ./images/3-d.png
[barangay]: ./images/3-e.png
[barangay2]: ./images/3-f.png
[barangay3]: ./images/3-g.png
[barangay4]: ./images/3-h.png
[client]: ./images/3-i.png
[newterminal]: ./images/3-j.png
[registered]: ./images/3-k.png
[password]: ./images/3-l.png
[confirmpass]: ./images/3-m.png
[generate]: ./images/3-n.png
[terminalkeys]: ./images/3-o.png
[terminalreg]: ./images/3-p.png
[administration]: ./images/3-q.png
[manageusers]: ./images/3-r.png
[managenew]: ./images/3-s.png
[newuser]: ./images/3-t.png
[edituser]: ./images/3-u.png
[addrole]: ./images/3-v.png
[adduser]: ./images/3-w.png
[lookup]: ./images/lookup.png
[usergroup]: ./images/3-x.png
[remove]: ./images/3-y.png
[close]: ./images/close.png
[close2]: ./images/3-z.png
[resetpass]: ./images/3-za.png
[mainmenu]: ./images/mainmenu.png
[usergroups]: ./images/usergroups.png
[securitygroup]: ./images/3-zb.png
[addsec]: ./images/3-zc.png
[threedots]: ./images/threedots.png
[permissions]: ./images/3-zd.png
[regnew]: ./images/4-a.png
[mainscreen]: ./images/4-b.png
[profile]: ./images/4-c.png
[roles]: ./images/5-a.png
[individual]: ./images/5-b.png
[basicinfo]: ./images/5-c.png
[duplicate]: ./images/5-d.png
[completeinfo]: ./images/5-e.png
[address]: ./images/5-f.png
[photo]: ./images/5-g.png
[duplicates]: ./images/5-h.png
[individuallist]: ./images/5-i.png
[openrecord]: ./images/5-j.png
[editrecord]: ./images/5-k.png
[editname]: ./images/5-l.png
[uppertab]: ./images/5-m.png
[createjuridical]: ./images/5-n.png
[multiple]: ./images/5-o.png
[allentity]: ./images/5-p.png
[membername]: ./images/5-q.png
[addentity]: ./images/5-r.png
[addmember]: ./images/5-s.png
[removemember]: ./images/5-t.png
