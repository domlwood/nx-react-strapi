const theme = gql`
    getTheme {
        primaryColor
        secondaryColor
        accentColor
    }
`

export const useTheme = () => {
    return useQuery()
}