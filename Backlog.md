# SmartStore React MVP — Product Backlog

## Project Overview
SmartStore is a React-based inventory management MVP for adding, editing, deleting, and searching products, tracking low-stock items, and viewing inventory statistics.

## MVP Backlog

| Ticket | Description | Priority | Dependencies / Reason | Status |
|---|---|---|---|---|
| SMART-01 | Search Products by Name | P1 | Existing product list and Add Product form | Closed |
| SMART-02 | Delete Product | P2 | Product list and identifiable product records | Closed |
| SMART-03 | Edit Product | P3 | Existing product records and React state | Closed |
| SMART-04 | Add Product with Validation and Cancel | P4 | Enhance the existing Add Product form | Closed |
| SMART-05 | Low Stock Alert | P5 | Product quantities and editing functionality | Closed |
| SMART-06 | Inventory Dashboard | P6 | Product state and low-stock calculation | Closed |

## SMART-01 — Acceptance Criteria
1. Users can enter a product name in a search field.
2. Only matching products are displayed.
3. Search is case-insensitive.
4. Clearing the search field restores the full product list.

## Implementation Status
All six tickets have been implemented and closed on GitHub. SMART-01 was the selected bounded implementation task for Laboratory Work 3; the other tickets were implemented separately.

## MVP Scope
The application currently uses React state with product name and quantity fields. Persistent storage, advanced category filters, and backend integration are outside the implemented scope.

## Repository
https://github.com/saifalhosany2-star/Smartstore_react_mvp

## GitHub Issues
https://github.com/saifalhosany2-star/Smartstore_react_mvp/issues
