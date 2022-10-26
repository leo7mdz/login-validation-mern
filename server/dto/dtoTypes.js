import { Type } from "@sinclair/typebox";

export const typeName = Type.String({
  minLength: 2,
  maxLength: 30,
  errorMessage: {
    minLength: "caracteres minimos 3",
    maxLength: "caracteres maximos 30",
  },
});

export const typeLastName = Type.String({
  minLength: 2,
  maxLength: 30,
  errorMessage: {
    minLength: "caracteres minimos 3",
    maxLength: "caracteres maximos 30",
  },
});

export const typeAge = Type.Number({
  errorMessage: {
    type: "El dato insertado debe ser en formato numero",
  },
});

export const typeProfession = Type.String();

export const typeEmail = Type.String({
  format: "email",
  errorMessage: {
    type: "El tipo debe ser un string",
    format: "El formato debe ser el RFC 5322",
  },
});

export const typePassword = Type.String({
  format: "password",
  minLength: 10,
  maxLength: 25,
  errorMessage: {
    type: "El formato debe ser de tipo string",
    format: "Debe contener al menos una mayuscula, una minuscula y un numero",
    minLength: "caracteres minimos 10",
    maxLength: "caracteres maximos 25",
  },
});
