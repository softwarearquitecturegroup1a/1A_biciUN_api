export const prestamosTypeDef = `
type Prestamo {
    id: Int!
    student_id: Int!
    bici_id: Int!
    solicitud: String
}

input PrestamoInput {
    student_id: Int!
    bici_id: Int!
    solicitud: String
}

input PrestamoInputEdit {
    student_id: Int
    bici_id: Int
    solicitud: String
}
`;

export const prestamosQueries = `
    allPrestamos(token: String!): [Prestamo]!
    prestamoById(token: String!, id: Int!): Prestamo!
`;

export const prestamosMutations = `
    createPrestamo(token: String!, prestamo: PrestamoInput!): Prestamo!
    deletePrestamo(token: String!, id: Int!): Prestamo!
    updatePrestamo(token: String!, id: Int!, prestamo: PrestamoInputEdit!): Prestamo!
`;
