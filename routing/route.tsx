interface Route<T> {
  name: string;
  component: () => JSX.Element;
  options: T;
}

export default Route;
