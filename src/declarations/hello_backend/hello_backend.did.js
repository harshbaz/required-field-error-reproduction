export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({ 'name' : IDL.Text });
  return IDL.Service({ 'greet' : IDL.Func([IDL.Text], [User], ['query']) });
};
export const init = ({ IDL }) => { return []; };
