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

<br />

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

<br />

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
[edit]: ./images/edit.png
[save]: ./images/save.png
[new]: ./images/new.png
[lookup]: ./images/lookup.png