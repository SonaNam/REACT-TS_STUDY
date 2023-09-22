import { useNavigate } from "react-router-dom";
import { userContactsData } from "../data";

const ContactList = () => {
  const { contactsData: contacts } = userContactsData();
  console.log;
  const navigate = useNavigate();

  const handleClickItem = (id: number) => {
    navigate(`/contacts/detail/${id}`);
  };
  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((c) => (
          <li
            style={{ cursor: "pointer" }}
            key={`contact-${c.id}`}
            onClick={() => {
              handleClickItem(c.id);
            }}
          >
            <span>
              {c.name} - {c.phone}
            </span>
          </li>
        ))}
      </ul>
      <button>Go to Detail</button>
    </div>
  );
};
export default ContactList;
