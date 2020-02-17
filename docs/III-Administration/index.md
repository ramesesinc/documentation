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
	<li>Go to <b>Administration</b> in the home screen.</li>
	<br />

	![alt text][admin]

	<br />

	<li>Click <b>Organization</b>. If this was for a city setup, you will be able to see the city and
barangay.</li>
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
	<li>To view the barangay listing, click Barangay under Organization.</li>
	
![alt text][barangay]
	<br />
	<br />
	<li>To edit the barangay, highlight and double click on the specific barangay and click <b>edit</b> ![alt text][edit] to edit the necessary information. Click <b>save</b> ![alt text][save] when completed. </li>
	<br />
![alt text][barangay2] <br />
	<br />
	<br />
	<li>To add new barangay, click <b>new</b> ![alt text][new] under <b>Barangay</b> tab. Fill up the necessary information. Click <b>save</b> ![alt text][save] when completed.</li>
	<br />
![alt text][barangay3] <br />
	<br />
	<br />
	<li>To delete barangay, select/highlight the specific barangay and click <b>delete</b>. A confirmation dialog box will pop-up, click <b>Yes</b> to proceed.</li>
	<br />
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

- ### <b>Terminal Registration</b>

<ol>
	<li>Run the client.</li>

![alt text][client]

	



</ol>














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
