import useSWR from "swr";

interface ContactData {
  id: number;
  name: string;
  phone: string;
}

export const userContactsData = () => {
  const { data: contactsData, mutate: mutateContactData } = useSWR<
    ContactData[]
  >("@data/contacts", {
    fallbackData: [],
  });

  return { contactsData, mutateContactData };
};
