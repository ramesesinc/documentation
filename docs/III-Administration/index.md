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

![alt text][org] <br />
<br />


Updating Organization
---

During installation the type of LGU was specified. Different LGU types have different ways of
managing.

- <b>Editing LGU information</b>
	1. Go to <b>Administration</b> in the home screen.

		![alt text][admin]

	2. 















[org]: ./images/3-a.png
[admin]: ./images/3-b.png