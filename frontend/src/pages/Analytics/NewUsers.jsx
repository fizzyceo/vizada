import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import moment from "moment";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = ["Member", "Ntel", "Joined at", "Active"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    lastName: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    lastName: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    lastName: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    lastName: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    lastName: "Manager",
    date: "04/10/21",
  },
];

export function NewUsers({ usersRows }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Filter rows based on search query
  const filteredRows = usersRows.filter(
    (row) =>
      row.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.ntel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  return (
    <div className="h-full w-full ">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Users list
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <div>
          <Input
            labeyl="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            icon={<MagnifyingGlassIcon className="w-4" />}
          />
        </div>
      </div>
      <div className="w-full">
        <table className="w-full min-w-max table-auto text-left overflow-scroll">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map(
              (
                { first_name, last_name, date_joined, is_active, email, ntel },
                index
              ) => {
                const isLast = index === currentRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={`${first_name}-${last_name}`}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {first_name} {last_name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {ntel}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {moment(date_joined).format("DD/MM/YYYY hh:mm")}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className={`font-normal rounded-full text-center text-gray-50 p-2`}
                      >
                        {is_active ? (
                          <CheckCircleIcon className={`w-7 text-green-400`} />
                        ) : (
                          <XCircleIcon className="w-7 text-red-700" />
                        )}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPages}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
