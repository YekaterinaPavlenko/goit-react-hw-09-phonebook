import React from 'react';
import ContactForm from '../../components/ContactsForm/ContactsForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
