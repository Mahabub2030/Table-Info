

const DataTable = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="overflow-x-auto">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <table  className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((item) => {
                        if (searchTerm === '') {
                            return item;
                        } else if (
                            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.lastLogin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.favoriteColor.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                            return item;
                        }
                    }).map((item, index) => (
                        <tr key={index}>
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.job}</td>
                            <td>{item.company}</td>
                            <td>{item.location}</td>
                            <td>{item.lastLogin}</td>
                            <td>{item.favoriteColor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
