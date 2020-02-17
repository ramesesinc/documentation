<style type="text/css">
	ol{ list-style-type: decimal !important }	

</style>



Overview
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
Organization, User Groups, Terminals and Queue System. <br />
<br />
<br />



Terminal
===

Terminal refers to the personal computer that will be used to connect to ETRACS. As long as
there is connectivity, whether through a public internet or through VPN, an ETRACS client
can connect to the server. Because of this, only the registered clients should be allowed to
access the server. This is done by assigning keys to the client and the client acknowledges by
submitting their MAC address as this is the only way to identify the machine. Although this is
not hack-proof, this is just an additional layer of security in the system. <br />
<br />
<br />



Roles, User Groups and Permissions
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
the roles for that organization will apply. <br />
<br />
<br />



Organization
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



Updating Organization
---

During installation the type of LGU was specified. Different LGU types have different ways of
managing.

### - <b>Editing LGU information</b>
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

Managing City Organization
---

### - <b>Editing City Information</b>

If the setup was for City, click on <b>City</b> under <b>Organization</b> to open the screen below. Click the <b>edit</b> button ![alt text][edit] to edit the necessary information. Click the save 	button ![alt text][save] when completed.

![alt text][city]

### - <b>Adding barangays</b>

<ol>
	<li>To view the barangay listing, click Barangay under Organization.</li>

![alt text][barangay]
	<br />
	<br />
	<li>To edit the barangay, highlight and double click on the specific barangay and click the <b>edit</b> button ![alt text][edit] to edit the necessary information. Click the <b>save</b> button ![alt text][save] when completed. </li>
	<br />
	![alt text][barangay2] <br />
	<br />
	<br />
	<li>To add new barangay, click the <b>new</b> button ![alt text][edit] under <b>Barangay</b> tab. Fill up the necessary information. Click the <b>save</b> button ![alt text][save] when completed.</li>
	<br />
	![alt text][barangay3] <br />
	<br />
	<br />
	<li>To delete barangay, select/highlight the specific barangay and click the <b>delete</b> button . A confirmation dialog box will pop-up, click <b>Yes</b> to proceed.</li>
	<br />
	![alt text][barangay4]

</ol>



<br />
<br />

Managing Province Organization	
---















[org]: ./images/3-a.png
[admin]: ./images/3-b.png
[organization]: ./images/3-c.png
[edit]: ./images/edit.png
[save]: ./images/save.png
[city]: ./images/3-d.png
[barangay]: ./images/3-e.png
[barangay2]: ./images/3-f.png
[barangay3]: ./images/3-g.png
[barangay4]: ./images/3-h.png
