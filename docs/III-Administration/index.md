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
