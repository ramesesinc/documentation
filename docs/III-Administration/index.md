<style type="text/css">
	ol{ list-style-type: decimal !important }	

</style>



<b>Overview</b>
===

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

ETRACS is not a stand-alone system. In fact, the idea is to allow ETRACS to be networkable to
other ETRACS servers. Thus the root organization of ETRACS refers to the main organization
or the LGU. Other Organizations include the barangays, terminals, hospitals etc. For a
province, the root organization is the province and sub organizations would be the
municipalities. So the system will know what organization the user wants to login to, the org
name must be specified in the client code in the login screen. (See screen below). If not
specified, the root organization will be used. <br />
<br />

![alt text][org]

<br />
<br />
<br />

<b>Updating Organization</b>
---

During installation the type of LGU was specified. Different LGU types have different ways of
managing.

- ### <b>Editing LGU information</b>
<br />

<ol>
	<li>Go to <b>Administration</b> in the home screen. </li>

![alt text][admin] 
	<br />
	<br />
	<li>Click <b>Organization</b>. If this was for a city setup, you will be able to see the city and
barangay. </li>
	<br />

![alt text][organization] 
</ol>

<br />
<br />
<br />

<b>Managing City Organization</b>
---

- ### <b>Editing City Information</b>

If the setup was for City, click on <b>City</b> under <b>Organization</b> to open the screen below. Click <b>edit</b> ![alt text][edit] to edit the necessary information. Click save ![alt text][save] when completed.

![alt text][city]

- ### <b>Adding barangays</b>

<ol>
	<li>To view the barangay listing, click Barangay under Organization. </li>

![alt text][barangay] 
<br />
<br />
	<li>To edit the barangay, highlight and double click on the specific barangay and click <b>edit</b> ![alt text][edit] to edit the necessary information. Click <b>save</b> ![alt text][save] when completed. </li>

![alt text][barangay2]
	<br />
	<br />
	<li>To add new barangay, click <b>new</b> ![alt text][new] under <b>Barangay</b> tab. Fill up the necessary information. Click <b>save</b> ![alt text][save] when completed.</li>

![alt text][barangay3]
	<br />
	<br />
	<li>To delete barangay, select/highlight the specific barangay and click <b>delete</b>. A confirmation dialog box will pop-up, click <b>Yes</b> to proceed. </li>

![alt text][barangay4] 
</ol>



<br />
<br />
<br />

<b>Managing Province Organization</b>
---

- ### <b>Editing Province Information</b>
	
If the province setup was chosen, click on <b>Province</b> under <b>Organization</b>. Click <b>edit</b> ![alt text][edit] to edit the necessary information. Click <b>save</b> ![alt text][save] when completed.
<br />
<br />

- ### <b>Managing Municipality</b>

Click Municipality under <b>Province</b> to view the municipality list. Click <b>edit</b> ![alt text][edit] to edit the municipality’s information. Click <b>new</b> ![alt text][new] to add municipality and fill up the necessary information. Click <b>save</b> ![alt text][save] when completed.
<br />
<br />

- ### <b>Editing Barangays</b>

Add first the municipality before adding barangays. That is because barangays are associated with the municipality. Just follow the steps on adding municipality above. After adding municipality, click <b>new</b> ![alt text][new] to add barangay. Fill up the necessary informations. Specify the municipality to which the barangay belongs. Click <b>save</b> ![alt text][save] when completed.

<br />
<br />
<br />

<b>Managing Municipality Organization</b>
---

- ### <b>Editing Municipality and Province</b>

If the selected setup is for municipality, the root org would be municipality. Go to <b>organization</b> and edit <b>Municipality</b>. Edit the necessary information under Municipality Information tab as well as the Province Information tab.

- ### <b>Adding Barangays</b>

Similar to the procedure in the preceding sections, edit also the barangay for the municipality.

<br />
<br />
<br />

<b>Administrator Account</b>
===

The SystemAdministrator’s account is the only account recognized by the system right out of the box. Only the system administrator at this time can add the users and define roles.

<br />

<b>Terminal Registration</b>
---

<br />
<ol>

<li>Run the client.</li>

![alt text][client]
<br />
<br />
	<li>Since this terminal is not yet registered, the system will require you to register a
terminal. Choose <b>Register new terminal</b> and click <b>Next</b>.</li>

![alt text][newterminal]
<br />
<br />
	<li>In the Terminal Key, enter <b>T001</b> and in the “Registered By:”, enter ADMIN. If 	successful, the login screen will appear.</li>

![alt text][registered]

<i>(Note: T001, T002, T003 are the system default terminal keys.</i>

</ol>

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
<br />
<i>(Note: !1234# is the system default temporary password for new user account.)</i>
<br />
<br />
If credentials are correct, the system will prompt you to change your password (See image below). Specify a password that is hard to guess. If you forget your password, it will be reset in the backend.
<br />
<br />

![alt text][password]
<br />
<br />

<b>Managing Terminals</b>
---

<br />
Terminal keys are randomly–generated keys. This is given to the computer during terminal registration. The terminal key is associated against the network interface cards MAC address after successful registration. This association will never change unless the NIC is replaced or damaged or the terminal key is deleted from the database. Before registration the Mac Address next to the terminal key is blank. After successful registration, the Mac Address should appear which means this terminal key cannot be used anymore. If you want to replace the mac address, click on Unassign and give the terminal key to another client for registration.
<br />
<br />

![alt text][confirmpass]

<br />
<br />

- #### <b>Generate Keys</b>
<br />
<ol>
	<li>Go to Administration> Terminals > Click <b>Generate Keys</b></li>
	<br />

	![alt text][generate]
	<br />
	<br />

	<li>Enter the no. of terminal keys to generate, then click <b>OK</b>.</li>
	<br />

	![alt text][terminalkeys]
	<br />
	<br />

	<li>Copy the unassigned key/s and distribute to new users to be used on terminal registration.</li>
	<br />

	![alt text][terminalreg]
</ol>

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
	- <b>User Group</b> - A combination of domain and role. Tip: To speed up lookup, type the domain in the User group textbox then press enter.
	- <b>Security Group</b> - If specified, only the allowed permissions will be accessible.
	- <b>Org Name</b>	 - If specified, this authorization will only be applicable for the organization specified.
	<br />

	![alt text][adduser]
	<br />
	
	On the <b>User Group</b> field, click lookup ![alt text][lookup] to show you the list of usergroups.
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
	In case a user forgets their password, the admin is the only one who can reset it. ETRACS does not have the capability to recover passwords because password encryption cannot be reversed. To do this, login as admin and go to the Administration> Manage Users> Open the user’s record> Click <b>Reset Password</b>. Specify a password and let the user know the password you specified. Ask the user to login using their username and password specified. If successful, the system will prompt the user to provide another password.
	<br />

	![alt text][resetpass]
	<br />
	<br />


<b>Managing Roles</b>
---

Roles are already pre-defined in the system (as part of the developer’s design) and there are already actions related to the role. To view these roles, click on ![alt text][mainmenu] Main Menu > Administration > User Groups.
<br />

![alt text][usergroups]
<br />
<br />

<b>Managing Security Groups & Customizing Permissions</b>
---

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
<br />
<br />


<b>Using ETRACS client</b>
===

<br />

<b>Overview</b>
---

This section describes the basic elements of the ETRACS client to familiarize the user on the user interface.
<br />
<br />

<b>The Registration Screen</b>
---

If you are using the system for the first time, this screen will appear. Click on <b>Register new terminal</b> and ask for an available terminal key from the system administrator.


![alt text][regnew]


Once registered, this screen should not appear anymore. If for some reason, this appears, and you know this is already registered, try <b>Recover existing Terminal</b>. If it cannot be solved, the network settings may have changed. You may need to ask the admin for a new terminal key and register it again.
<br />
<br />

<b>The Login Screen</b>
---

The login screen is the first screen you will always see. It will require you to enter your username and password. If you want to log in to another org, you must specify the org code in the client code. Ask the system administrator regarding the organization codes.


![alt text][regnew]


If login is successful, the main screen should appear.

<br />
<br />
<br />


<b>The Main Screen</b>
---

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

To view the profile click on the System menu in the toolbar menu.

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

<b><u>Shutdown</u></b>

This will logoff the existing session and close the client

<br />

<b><u>Logoff</u></b>

This will logoff the existing session and close the client

<br />
<br />

### <b>Navigation</b>

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

### <b>Navigation</b>

<br />

Menu Bar Navigation

Tree Navigation

Quick Launcher Navigation

Opening Form from List

<br />
<br />

### <b>Input Controls</b>

<br />

<u>List View</u>

<u>Text Field</u>

<u>Date Field</u>

<u>Lookup Field</u>

<u>Radio Field</u>

<u>Check Box Field</u>

<u>DropDown List</u>

<u>Grid or Table</u>

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

### <b>Roles and Permissions</b>

<br />

The following are the roles needed for this module.


DOMAIN: ENTITY


![alt text][roles]


To configure this role further, check or uncheck the necessary permissions or customize it by adding security groups.

<br />
<br />

<b>Individual Entity</b>
---

<br />

### <b>Adding an Entity</b>

- To add an individual entity, go to <b>Main Menu</b> and select <b>Master Data</b> > <b>Entities</b> > <b>Individual</b> <i>(See diagram below)</i>. This will display a listing of individual entities. Click <b>New</b> ![alt text][new] to add a new record.

![alt text][individual]















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


