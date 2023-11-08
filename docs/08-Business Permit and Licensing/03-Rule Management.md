## Rule Management

### Overview

There are 3 rule sets in the Business Permits Module as follows:

|                      |                                                                                                                                                                                                                                                                                                                                                                                                                                   | 
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BP Info Rules        | This set of rules are executed during the initial gathering of information performed by the Business Information (for some this is the Mayors Office). This usually asks for information required in the Unified Form like no. of employees by gender, business size, etc. This also includes determining the business requirements based on the information given. Information gathered here can also be used in the assessment. |
| Assessment Rules     | This rule set is executed during assessment. This includes asking for additional information to be used in assessing taxes and fees, the calculation of taxes and fees and mapping to certain accounts.                                                                                                                                                                                                                           |
| Billing Rules        | This rule set is executed during preparation of bills to include or exclude surcharges and penalties. This also is executed during receiving of payments (during collection) as it will always compute based on the date.                                                                                                                                                                                                         |

### Facts

The following are the common facts used in the system. Some facts are
shared while others are only used for a certain ruleset.

| FACT                     | APPLICABLE RULESETS | DESCRIPTION                                                                                                                                                                                                                            |
|--------------------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BPApplication            | All                 | The application info. Contains type of assessment (NEW,RENEW,RETRE,AMEND). Only 1 application is normally evaluated at a time                                                                                                          |
| Line of Business         | All                 | Contains line of business including classification and its attributes. Could be 1 or many depending on the application. Also contains assessmenttype because sometimes new lines of business are applied during renewal as additional. |
| Business Info            | All                 | Business Information that could be referenced for the application or for each line of business                                                                                                                                         |
| Business Location        | All                 | References the address of the business. The address could be local or non-local, rented or within government property.                                                                                                                 |
| Business Tax Account     | Bpassessment        | Represents the business tax account and the amount computed. Derived fact from the compute business tax action                                                                                                                         |
| Regulatory Fee Account   | Bpassessment        | Represents the regulatory fee account and the amount computed. Derived fact from the compute regulatory fee action                                                                                                                     |
| Other Charge Account     | Bpassessment        | Represents the other charge account and the amount computed. Derived fact from the compute other charge action                                                                                                                         |
| Sys Variable             | All                 | A derived variable used for creating dynamic variables that can be used by the system.                                                                                                                                                 |
| Qtr Date                 | bpblling            | Created when split qtr rule action is run. It creates 4 QtrDate facts representing 4 quarters of the year and their deadlines.                                                                                                         |
| Current Date             | Bpblling            | Represents the current date. Used for comparing dates in billing                                                                                                                                                                       |
| Other Charge Bill Item   | Bpblling            | Derived fact from the system generated during billing which represents other charges.                                                                                                                                                  |
| Regulatory Fee Bill Item | Bpblling            | Derived fact from the system generated during billing which represents regulatory fee transactions.                                                                                                                                    |
| Business Tax Bill Item   | Bpblling            | Derived fact from the system generated during billing which represents business taxes.                                                                                                                                                 |
| Bill Date                | Bpblling            | Represents the bill date. Used during billing to calculate interest                                                                                                                                                                    |
| Pay Option               | Bpblling            | Used during billing and represents the type of payment requested by the user whether full payment, qtr payment, partial payment or overpayment                                                                                         |
| Payment                  | Bpblling            | The amount paid. This is used internal ly by the system                                                                                                                                                                                |

### Actions

The following actions are used in the business module:

| ACTION                    | APPLICABLE RULESETS  | DESCRIPTION                                                                                                                                                          |
|---------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Schedule By Qtr           | Bpbilling            | Action that splits a selected bill item facts into quarterly deadlines                                                                                               |
| Compute Business Tax      | Bpassessment         | Action that computes the business tax                                                                                                                                |
| Select Tax Fee Account    | Bpassessment         | If there are more than 1 tax fees computed, this action will choose 1 based on a criteria, either lowest or highest amount                                           |
| Remove Tax Fee            | Bpassessment         | This action removes a tax fee entry based on a criteria                                                                                                              |
| Ask Business Info         | Bpinfo, bpassessment | Action to ask for more business info from the user                                                                                                                   |
| Add Requirement           | Bpinfo               | Action that adds requirements. Requirement selected from the Business Requirements dara                                                                              |
| Compute Regulatory Fee    | Bpassessment         | Action to compute regulatory fee.                                                                                                                                    |
| Calculate Discount        | Bpbilling            | Action that calculates discount based on selected items                                                                                                              |
| Calculate Interest        | Bpbilling            | Action that calculates interest.                                                                                                                                     |
| Add System Variable       | All                  | Action that internally creates a system variable that is used within the system. The final result will not be visible by the user and will only say during execution |
| Add Derived Business Info | Bpinfo               | Similar to system variable but the result can be seen by the user.                                                                                                   |
| Update Tax Fee Amount     | Bpassessment         | For some taxes or fees, amount is updated prior to returning the result.                                                                                             |
| Change Business Account   | Bpassessment         | Used to change account mappings after all rule computations are done. This is generally used for reporting purposes.                                                 |
| Compute Other Charge      | Bpassessment         | Action that calculates other charges                                                                                                                                 |
| Calculate Surcharge       | Bpbilling            | Action that calculates surcharges                                                                                                                                    |

### Rules

There are three rulesets executed for business permit and licensing –
the bpinfo, bpassessment and bpbilling. This section describes each
rule.

#### BP Info

The BPInfo rules are executed by the business information section. This
refers to the frontline for accepting new business applications,
renewing, retiring or amending applications. The basic information may
include number of employees, how many male or female employees or
something of that nature. To edit these rules go to **Main Menu &gt;
Rule Management &gt; BP Info Rules.** To add or remove rules, please
refer to the **Rule Management** Section**.**

The system accompanies the important rules. You need to deploy these
rules if necessary.

### Authoring Rules

#### Billing Rules

The Billing Rules calculates surcharges and penalties. One of the common
rules of the is the quarterly billing of business tax which is

Split By Qtr:

![image|512x397,100%](images\image143.png)
<!-- <img src="images\image143.png" style="width:2.15517in;height:1.56795in" /> -->

*Interest Computation:*

This rule

![image|512x397,100%](images\image144.png)
<!-- <img src="images\image144.png" style="width:3.84004in;height:2.936in" /> -->

## Transactions

### Application

>New 

>Renew

>Retire

>Amend

>Late Renewal

### Assessment

>Viewing Pending Assessments

>Assess Application

>Approval of Application

>Printing Assessment

>Printing of Bill

### Collection

>Collection Settings

>Processing Collection

### Issuance of Permit

>Releasing Permit

>Issuance of Permit

>Changing Business Information

>Customizing Permit Report

### Reports

>Line of Business Listing

>Business Master List

>List of Employers

>Application Listing

>Business Permit Listing

>Business Comparative Assessment Listing

>Business Comparative Listing

>Line of Business Count Listing

>Top Business Listing

>Summary of Business Permit

>Quarterly Paid Business Listing

>Business Collection Report

>Business Delinquency 

##
