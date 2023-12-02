export interface NavigateProps {
  firstLink: string;
  firstPath: string;
  secondLink: string;
  secondPath: string;
}

export interface FormProps {
  title: string;
  children: React.ReactNode;
}

export interface UserProps {
  photoURL: string;
  displayName: string;
}

export interface IProps {
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}

export interface HookFormProps {
  username: string;
  email: string;
  password: string;
}

export interface SearchProp {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserStateProp {
  user: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}

interface ProductsProp {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  description: string;
  type: string;
}

export interface AmountProductsProp extends ProductsProp {
  amount: number;
}

export interface CartProp {
  cart: AmountProductsProp[];
  setCart: React.Dispatch<React.SetStateAction<AmountProductsProp[]>>;
}

export interface SearchCartProp {
  user: UserProps;
  searchValue: string;
  cart: AmountProductsProp[];
  setCart: React.Dispatch<React.SetStateAction<AmountProductsProp[]>>;
}

export interface SortProp {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}
