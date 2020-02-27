<b>Overview</b>
===

<br />

The Treasury Revenue (Collection) Module consists of a general collection framework for handling all types of revenues. By default it comes with an implementation called the Miscellaneous Collection, for processing any type of collection.  For specialized collections however, specific modules must be plugged into the system. For example, RPT Collection is available only when the RPT Module is installed while the BP Collection comes with the BP Module. This makes the Tax Collection Module very flexible since new types of revenues can be added in the future.

<br />

This module includes, but not limited to, the following key features:
<br />

- Request and issuance of Accountable Forms

- Accountable Form Inventory

- Collection of AF 51, 52,53,54 and 58 and other custom forms

- Collection of Cash Ticket

- Online Posting of Remittance

- Online Posting of Liquidation

- Online Posting of Deposit

- Support for NGAS and SRE account mappings

- Multiple modes of operation (online, offline, capture)

- Improve support of Field Collections

<br />
<br />
<br />

<b>Collection Requirements</b>
===

<br />

Collection is a sensitive transaction because it involves money. Because of this, there are several layers of security for a collector. Before a collector can perform any transactions, the following is needed:


1. There must be an assigned Collector Role with appropriate permissions.
2. Collector must have open (unused) accountable forms in the system. 
3. Cash books per fund must be created per collector.  This version can limit a collector to a certain fund, for example, a collector can only collect General Fund transactions. 

<br />
<br />
<br />

<b>Collection Cycle</b>
===

<br />

The collection process follows the standard government operation guidelines. The following describes the typical cycle for an online collection:


1. A collector requests for an accountable form in the system. This is done through an online request (RIS) and forwarded to the accountable form officer (AFO)
2. After the accountable form is issued by the AFO, the actual stub is received by the collector with a receipt form from the AFO. The collector can now start collection.
3. The collector does an online collection through the terminal and prints the actual receipt. 
4. At the end of the day, the collector performs a remittance. This is done by counting the money and checks received then perform a remittance transaction in the system.  The remittance form is printed and the money and checks are forwarded to the liquidating officer.
5. The liquidating officer receives all collections from the different collectors, and prepares a consolidated report to be forwarded to the cashier. Reports are also segregated by fund.
6. The cashier receives the liquidation report from the liquidating officers. The cashier prepares the deposit slip from the system and  closes the deposit once confirmed.
7. Revenue reports can be automatically generated, like SRE and NGAS.

<br />
<br />
<br />

<b>Mode of Operation</b>
===

<br />

There are currently 3 modes of operation supported. The modes are:

- <b>ONLINE</b> – generally intended to be used as tellering. The transaction date is automatically assigned by the system and the record is not editable once committed. In cases of errors, the receipt  must be voided.

- <b>OFFLINE</b> – this mode can be used as tellering or capturing of previous transactions. The main difference between offline and online mode is that any information can be modified even if the record is already committed. This is designed to be used in cases such as power interruption, hardware failures, etc.

- <b>CAPTURE/FIELD</b>  – used to capture field collections. It allows full editing capability inorder to simplify correction of erroneous data entry. This mode also requires manual posting of encoded data for counter-checking and ensuring correctness. Once posted, capture data can no longer be edited.

- <b>MOBILE</b> – currently under development. This expedite posting of field collections by providing the facility for collectors to encode transactions while in the field.

<br />
<br />
<br />

<b>Roles and Permissions</b>
===

The following roles are required to carry out tasks for this module


DOMAIN: TREASURY

![alt text][roles]

<br />
<br />
<br />

<b>Master Data Management</b>
===

Before a collection can be operational, the master files need to be set up.

<br />

## <b>Funds</b>

<br />

By default, there are already 3 main funds available in the system which are the following: GENERAL, SEF and TRUST.

This can be extended by adding sub funds per main fund. 

Go to <b>Main Menu > Master > Financial > Funds</b>

![alt text][funds]

<br />
<br />

To add sub funds per main fund, click <b>New</b> ![alt text][new], fill up the necessary data and click Save ![alt text][save].


![alt text][subfund]

<br />
<br />
<br />

## <b>Revenue Items</b>

<br />

Revenue items refer to the line items of the receipt. This includes taxes, fees, other charges and penalty accounts among others. This is also the source of information regarding the type of collection.

![alt text][itemaccount]

<br />
<br />
<br />

## <b>Collection Types</b>

<br />

Collections are classified by types. Some LGU create reports based on collection type. Examples of collection type are General Collection and Business Permits. This also determines the type of screen handler it will use during collection. That means if one collects the business permit, a special screen for collecting business permit will be used. 

![alt text][collectiontypes]

<br />
<br />
<br />

## <b>Collection Groups</b>

<br />

Collection group is a facility used in the system to speed up collections for some transactions. Some collections that are not automated, for example, building permits contain several fees that are included. So that one does not have to individually add these fees, by choosing the collection group it automatically populates these fees saving the collector time.

![alt text][collectiongroups]

<br />
<br />
<br />

## <b>Cash Books</b>

<br />

Starting with version 2.5, each collector, liquidating officer and cashier are required to have cashbooks. Cashbooks are created per user, user role and fund. Cashbooks record or log the flow of money in the system. For collectors, the amount is increased every time they make a collection or receive money. The amount is deducted every time remittance is performed. For liquidating officers, the amount is increased when money is remitted and decreased when the amount is sent to cashier after preparing liquidation transaction. For cashiers, the amount is increased during liquidation and decreased when money is deposited in the bank. Cashbook entries are automatically entered and tied up with their respective transactions. 

![alt text][cashbook]

<br />
<br />
<br />

## <b>Banks</b>

<br />

Banks are used throughout the system. The most common use is the management of bank accounts and also used when receiving checks in the cash receipt.

![alt text][banks]

<br />

- Bank Code – the assigned bank code. This is required.
- Bank Name – the bank’s complete name. This is required.
- Branch Name – the bank’s branch. This is required.

<br />
<br />
<br />

## <b>SRE Account</b>

<br />

SRE (Statement of Revenue Expense) is a report required by the BLGF. To produce SRE reports, the revenue items must be mapped to the SRE accounts. 

![alt text][SRE]

<br />
<br />
<br />

## <b>Revenue Item Mapping</b>

<br />

The national government requires the LGU to submit reports and some of these reports are the NGAS and SRE. To address the need for reporting like NGAS or SRE, revenue items can be mapped to its specific account. The advantage of this new design is it can adapt to changes in the national government while preserving the old reports. One can just add a new set of accounts then map it.

![alt text][itemmapping]

<br />
<br />
<br />

## <b>SRE Annual Income Targets</b>

<br />

Target amounts in the SRE are defined by year.

![alt text][SREAnnual]

<br />
<br />
<br />

<b>Accountable Form Management</b>
===

<br />
<br />

<b>Overview</b>
===

Accountable Forms (AF) is a general term for receipt forms or official receipts. Being representation of money received, issuance has to be controlled and each form must be monitored in the system. Accountable forms are classified as serial and non-serial. Serial refers to the numbered receipts like Form 51, 56, 58. The non-serial receipts include cash tickets, or receipts containing money value.  


Collectors cannot collect unless they have accountable forms on hand. If they do not yet have accountable forms, they must first create a request through an RIS( Requisition Issue Slip) for Accountable forms and specify which accountable form they want to request.


The Accountable Form Officer (AFO) is the one in charge of the inventory of accountable forms and in ensuring that there is enough stock on hand.  The AFO receives requests from the collectors. If there is not enough stock, the AFO will also create a request intended for the national printing office or another LGU where they will order stock. Once the stock arrives, they will create a receiving document to add the new stock to the inventory.

<br />
<br />
<br />

## <b>Replenishing Accountable Forms</b>


![alt text][ReplenishingAF]

<br />
<br />
<br />

## <b>Receiving Accountable Forms</b>

![alt text][ReceivingAF]

<br />

![alt text][ReceivingAF2]

<br />
<br />
<br />

## <b>Request Accountable Forms for Collector</b>

![alt text][AFcollector]

<br />
<br />
<br />

## <b>Issue Accountable Forms for Collection</b>

![alt text][AFissue]

<br />
<br />
<br />

![alt text][AFissue2]

<br />
<br />

![alt text][AFissue3]

<br />
<br />
<br />

## <b>Request Accountable Forms for Sale</b>

![alt text][AFsale]

<br />
<br />
<br />

## <b>Issue Accountable Forms for Sale</b>


![alt text][AFsale2]

<br />

![alt text][AFsale3]

<br />

![alt text][AFsale4]


















[roles]: ./images/6-a.png
[funds]: ./images/6-b.png
[new]: ./images/new.png
[save]: ./images/save.png
[subfund]: ./images/6-c.png
[itemaccount]: ./images/6-d.png
[collectiontypes]: ./images/6-e.png
[collectiongroups]: ./images/6-f.png
[cashbook]: ./images/6-g.png
[banks]: ./images/6-h.png
[SRE]: ./images/6-i.png
[itemmapping]: ./images/6-j.png
[SREAnnual]: ./images/6-k.png
[ReplenishingAF]: ./images/6-l.png
[ReceivingAF]: ./images/6-m.png
[ReceivingAF2]: ./images/6-n.png
[AFcollector]: ./images/6-o.png
[AFissue]: ./images/6-p.png
[AFissue2]: ./images/6-q.png
[AFissue3]: ./images/6-r.png
[AFsale]: ./images/6-s.png
[AFsale2]: ./images/6-t.png
[AFsale3]: ./images/6-u.png
[AFsale4]: ./images/6-v.png