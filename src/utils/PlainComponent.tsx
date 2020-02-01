export type PlainComponent<T extends object> = React.FC<
  { className: string } & T
>
