const getStyles = () => ({
    title: {
        fontSize: 50,
        padding: '15px',
        marginBottom: '30px',
        color: '#f0f2f5',
    }
})

const Title = () => {
    const styles = getStyles();

    return <h1 style={styles.title}>PEOPLE AND THEIR CARS</h1>
}

export default Title;