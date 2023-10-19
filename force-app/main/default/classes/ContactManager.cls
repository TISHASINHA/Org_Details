public with sharing class ContactManager {


    //fetchContactViaApex

//     @AuraEnabled(cacheable=true)
//    public static List<Contact> getContact()
//    {
//     return [select id,LastName,Phone from Contact Limit 20];
//    }

    //fetchRecordsViaApex

@AuraEnabled(cacheable=true)
public static List<Contact> getAllContact(Integer numberOfRecords)
{
 return [select id,LastName,Phone from Contact Limit:numberOfRecords];
}
}