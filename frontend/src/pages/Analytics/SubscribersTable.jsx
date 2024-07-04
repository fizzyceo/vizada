import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import moment from "moment";
import { CredModel } from "./CredModel";
import { useEffect, useState } from "react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Management",
    value: "Management",
  },
  {
    label: "IT",
    value: "IT",
  },
];

const TABLE_HEAD = ["Member", "Type", "Date", "Credentials", ""];

export function SubscribersTable({ subsRows }) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [currentRows, setCurrentRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Example: 10 items per page

  useEffect(() => {
    setCurrentRows(subsRows);
  }, [subsRows]);

  useEffect(() => {
    setCurrentRows(searchQuery ? filteredRows : subsRows);
  }, [subsRows, filteredRows, searchQuery]);

  const handleTabClick = (val) => {
    if (val === "all") {
      setCurrentRows(subsRows);
    } else {
      let filteredRows = subsRows.filter(
        (row) => row.categorie.Nomcategorie === val
      );
      setCurrentRows(filteredRows);
    }
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentRows.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredRows([]);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = subsRows.filter(
        (row) =>
          row.user.first_name.toLowerCase().includes(lowerCaseQuery) ||
          row.user.last_name.toLowerCase().includes(lowerCaseQuery) ||
          row.user.email.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredRows(filtered);
    }
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Subscribers list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => handleTabClick(value)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
            {currentItems.map(
              (
                { id, Datesub, DateDebSession, user, categorie, typeS, active },
                index
              ) => {
                const isLast = index === currentItems.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {user.first_name} {user.last_name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {user.email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {typeS}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {categorie.Nomcategorie}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {moment(Datesub).format("YYYY/MM/DD hh:mm")}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={active === 1 ? "Given" : "Not Given"}
                          color={active === 1 ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    {active === 0 && (
                      <td className={classes}>
                        <CredModel
                          body={{
                            Datesub: Datesub,
                            DateDebSession: DateDebSession,
                            active: active,
                            typeS: typeS,
                            Id_user: user.id,
                            Id_c: categorie.id,
                          }}
                          id={id}
                          open={open}
                          setOpen={setOpen}
                        />
                      </td>
                    )}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {Math.ceil(currentRows.length / itemsPerPage)}
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
            disabled={indexOfLastItem >= currentRows.length}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
