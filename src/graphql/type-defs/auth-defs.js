import apollo from "apollo-server-express";

export const authDefs = apollo.gql`
    type Mutation {
        login (usr: String!, pwd: String!): String
        register (usr: String!, pwd: String!, userArgs: UserArgs): String
    }
    
    input UserArgs {
        chanCenterArgs: ChannelCenterArgs
        doctorArgs: DoctorArgs
        patientArgs: PatientArgs
        labArgs: LabArgs
    }
`;