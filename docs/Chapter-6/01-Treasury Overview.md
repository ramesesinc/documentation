# Treasury (Revenue)

## Overview

The Treasury Revenue (Collection) Module consists of a general
collection framework for handling all types of revenues. By default it
comes with an implementation called the Miscellaneous Collection, for
processing any type of collection. For specialized collections however,
specific modules must be plugged into the system. For example, RPT
Collection is available only when the RPT Module is installed while the
BP Collection comes with the BP Module. This makes the Tax Collection
Module very flexible since new types of revenues can be added in the
future.

This module includes, but not limited to, the following key features:

-   Request and issuance of Accountable Forms

-   Accountable Form Inventory

-   Collection of AF 51, 52,53,54 and 58 and other custom forms

-   Collection of Cash Ticket

-   Online Posting of Remittance

-   Online Posting of Liquidation

-   Online Posting of Deposit

-   Support for NGAS and SRE account mappings

-   Multiple modes of operation (online, offline, capture)

-   Improve support of Field Collections

### Collection Requirements

Collection is a sensitive transaction because it involves money. Because
of this, there are several layers of security for a collector. Before a
collector can perform any transactions, the following is needed:

1.  There must be an assigned Collector Role with appropriate
    permissions.

2.  Collector must have open (unused) accountable forms in the system.

3.  Cash book per fund must be created per each collector. This version
    can limit a collector to a certain fund, for example, a collector
    can only collect General Fund transactions.

### Collection Cycle

The collection process follows the standard government operation
guidelines. The following describes the typical cycle for an online
collection:

1. A collector requests for an accountable form in the system. This is
done through an online request (RIS) and forwarded to the accountable
form officer (AFO)

2. After the accountable form is issued by the AFO, the actual stub is
received by the collector with a receipt form from the AFO. The
collector can now start collection.

3. The collector does an online collection through the terminal and
prints the actual receipt.

4. At the end of the day, the collector performs a remittance. This is
done by counting the money and checks received then perform a remittance
transaction in the system. The remittance form is printed and the money
and checks are forwarded to the liquidating officer.

5. The liquidating officer receives all collections from the different
collectors, and prepares a consolidated report to be forwarded to the
cashier. Reports are also segregated by fund.

6. The cashier receives the liquidation report from the liquidating
officers. The cashier prepares the deposit slip from the system and
closes the deposit once confirmed.

7. Revenue reports can be automatically generated, like SRE and NGAS.

### Mode of Operation

There are currently 3 modes of operation supported. The modes are:

-   **ONLINE** – generally intended to be used as tellering. The
    transaction date is automatically assigned by the system and the
    record is not editable once committed. In cases of errors, the
    receipt must be voided.

-   **OFFLINE** – this mode can be used as tellering or capturing of
    previous transactions. The main difference between offline and
    online mode is that any information can be modified even if the
    record is already committed. This is designed to be used in cases
    such as power interruption, hardware failures and etc.

-   **CAPTURE/FIELD** – use to capture field collections. It allows full
    editing capability inorder to simplify correction of erroneous data
    entry. This mode also requires manual posting of encoded data for
    counter-checking and ensuring correctness. Once posted, capture data
    can no longer be edited.

-   **MOBILE** – currently under development. This expedite posting of
    field collections by providing the facility for collectors to encode
    transactions while in the field.