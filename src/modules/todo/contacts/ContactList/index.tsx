import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const contacts = [
    { id: 1, name: "Alice", phone: "010-1234-5678" },
    { id: 2, name: "John", phone: "010-2341-8567" },
  ];
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
