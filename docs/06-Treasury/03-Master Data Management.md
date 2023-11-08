## Master Data Management

Before a collection can be operational, the master files need to be set
up.

### Funds

By default, there are already 3 main funds available in the system which
are the following: **GENERAL**, **SEF** and **TRUST**

This can be extended by adding sub funds per main fund.

## ![image|512x397,100%](images\image72.png)
<!-- ## <img src="images\image72.png" style="width:2.99137in;height:1.56in" /> -->

### Revenue Items

Revenue items refer to the line items of the receipt. This includes
taxes, fees, other charges and penalty accounts among others. This is
also the source of information regarding the type of collection.

![image|512x397,100%](images\image73.png)
<!-- <img src="images\image73.png" style="width:2.9876in;height:2.36in" /> -->

&lt;describe adding data&gt;

### Collection Types

Collections are classified by types. Some LGU create reports based on
collection type. Examples of collection type are General Collection and
Business Permits. This also determines the type of screen handler it
will use during collection. That means if one collects the business
permit, a special screen for collecting business permit will be used.

![image|512x397,100%](images\image74.png)
<!-- <img src="images\image74.png" style="width:3.2455in;height:1.704in" /> -->

&lt;describe adding data&gt;

### Collection Groups

Collection group is a facility used in the system to speed up
collections for some transactions. Some collections that are not
automated, for example, building permits contain several fees that are
included. So that one does not have to individually add these fees, by
choosing the collection group it automatically populates these fees
saving the collector time.

![image|512x397,100%](images\image75.png)
<!-- <img src="images\image75.png" style="width:3.29917in;height:1.99244in" /> -->

&lt;describe adding data&gt;

### Cash Books

Starting with version 2.5, each collector, liquidating officer and
cashier are required to have cashbooks. Cashbooks are created per user,
user role and fund. Cashbooks record or logs the flow of money in the
system. For collectors, the amount is increased everytime they make a
collection or receive money. The amount is deducted everytime remittance
is performed. For liquidating officers, the amount is increased when
money is remitted and decreased when the amount is sent to cashier after
preparing liquidation transaction. For cashiers, amount is increased
during liquidation and decreased when money is deposited in the bank.
Cashbook entries are automatically entered and tied up with their
respective transactions.

![image|512x397,100%](images\image76.png)
<!-- <img src="images\image76.png" style="width:3.20317in;height:2.29219in" /> -->

&lt;describe adding data&gt;

### Banks

Banks are used throughout the system. The most common use is the
management of bank accounts and also used when receiving checks in the
cash receipt.

![image|512x397,100%](images\image77.png)
<!-- <img src="images\image77.png" style="width:2.87517in;height:2.056in" /> -->

&lt;describe adding data&gt;

-   **Bank Code** – the assigned bank code. This is required.

-   **Bank Name** – the bank’s complete name. This is required.

-   **Branch Name** – the bank’s branch. This is required.

### SRE Account

SRE (Statement of Revenue Expense) is a report required by the BLGF. To
produce SRE reports, the revenue items must be mapped to the SRE
accounts.

![image|512x397,100%](images\image78.png)
<!-- <img src="images\image78.png" style="width:3.60432in;height:2.032in" /> -->

&lt;describe adding data&gt;

### Revenue Item Mapping 

The national government require the LGU to submit reports and some of
these reports are the NGAS and SRE. To address the need for reporting
like NGAS or SRE, revenue items can be mapped to its specific account.
The advantage of this new design is it can adapt to changes in the
national government while preserving the old reports. One can just add a
new set of accounts then map it.

![image|512x397,100%](images\image79.png)
<!-- <img src="images\image79.png" style="width:5.33611in;height:1.25625in" /> -->

&lt;describe adding data&gt;

### SRE Annual Income Targets

Target amounts in the SRE are defined by year.

![image|512x397,100%](images\image80.png)
<!-- <img src="images\image80.png" style="width:5.33611in;height:1.27986in" /> -->
