

## Overview

Security is of vital importance in making any system trustworthy. The
proper administration of a system would result in high degree of
integrity and makes a system secure and dependable. ETRACS implements a
strong security architecture that strictly defines the boundaries
between the LGU, organizations, functions, terminals and users.

Administration is the process of defining access control on system
resources which adheres to a defined security structure. It is generally
composed of two parts, namely:

-   **Authentication** - is the procedure of identifying the validity
    and authenticity of anyone that accesses the system. This is
    currently implemented using the standard *username* and *password*
    model. However, fingerprint identification and other means of
    authentication could easily be integrated.

-   **Authorization** - is the process of giving anyone the permission
    to access resources and to execute system functions. It is
    implemented using a *Role-Base* model. Built-in roles such as
    COLLECTOR are already created with the corresponding permissions
    defined.

## Terminal

Terminal refers to the personal computer that will be used to connect to
ETRACS. As long as there is connectivity, whether through a public
internet or through VPN, an ETRACS client can connect to the server.
Because of this, only the registered clients should be allowed to access
the server. This is done by assigning keys to the client and the client
acknowledges by submitting their MAC address as this is the only way to
identify the machine. Although this is not hack-proof, this is just an
additional layer of security in the system.

## Roles, User Groups and Permissions

Before a user can do some transaction in the system, they need to be
authorized to perform a task. This is done by assigning roles. Roles are
already built-in to the system and are dependent on the application
developer. Roles are usually named on actors or doers of an action, or a
position like MANAGER or APPROVER. Sometimes the role names are
noun-like such as MASTER or SHARED which is usually used for master
files or shared permissions. To avoid conflicting roles, roles are
separated by domain. Domain refers to a business subject area or a
functional group like TREASURY or BPLO. The combination of domain and
role is termed as a User Group. Users are bounded, or become members to
user groups. A user group can be limited further by organization, which
means when a user logs in to an organization, the roles for that
organization will apply.