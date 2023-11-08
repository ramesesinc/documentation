# Entity Management

## Overview

Entity refers to a person, group or organization that conducts business
with the local government. In previous versions of ETRACS, this was
termed as the payer or taxpayer. Entity can be an owner of properties or
business therefore it is widely used throughout the system. Because of
this, there is high probability of duplicate entries that is why careful
consideration has to be done to ensure that this will be minimized.
There are three types of entities as follows:

<u>**Individual**</u> - refers to an individual person. This is the most
common entity in the system.

**<u>Juridical</u>** - refers to an organization or non-individual
entity. This can be classified further as Corporation, Cooperative,
Association, Religious, Foundation or Partnership.

**<u>Multiple</u>** - refers to a group combination of individual or
sometimes juridical entities. It is represented as a single unit entity.
For example in real property there are sometime multiple owners for a
single property. Since there can only be one owner associated with a
property, we create a multiple entity composing individual entities and
use this instead as the owner of the property.

## Roles and Permissions

The following are the roles needed for this module.

DOMAIN: ENTITY

| ROLE     | DESCRIPTION                                                     |
|----------|-----------------------------------------------------------------|
| MASTER   | allows user to add, edit remove entities                        |
| APPROVER | allows user the capability to override adding duplicate entries |

To configure this role further, check or uncheck the necessary
permissions or customize it by adding security groups.