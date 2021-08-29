import queryString from 'query-string';

export const queryStringBody = body => {
  return queryString.stringify(body);
};
