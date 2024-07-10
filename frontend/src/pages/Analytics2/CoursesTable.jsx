import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  InformationCircleIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
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
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ViewCourse } from "./models/ViewCourse";
import { DeleteCourse } from "./models/DeleteCourse";
import { ModifyCourseModel } from "./models/ModifyCourse";
import { AddCourseModel } from "./models/AddCourseModel";
import { useCoursesStore } from "../../stores/Courses";
import { wrapText } from "../../Components/Common/wrapText";

const TABLE_HEAD = ["Image", "Course", "Link", "", ""];

export function CoursesTable({ courses }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [OpenViewCourse, setOpenViewCourse] = useState(false);
  const [OpenDeleteCourse, setOpenDeleteCourse] = useState(false);
  const [OpenModifyCourse, setOpenModifyCourse] = useState(false);
  const [OpenAddCourse, setOpenAddCourse] = useState(false);
  const [selectedRowView, setSelectedRowView] = useState(null);
  const [selectedRowModify, setSelectedRowModify] = useState(null);
  const [selectedRowDelete, setSelectedRowDelete] = useState(null);
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const { getSubCategories, subcategories } = useCoursesStore((state) => state);
  const handleOpenView = (content) => {
    setSelectedRowView(content);
    setOpenViewCourse(!OpenViewCourse);
  };

  const handleOpenAdd = () => {
    setOpenAddCourse(!OpenAddCourse);
  };

  const handleOpenDelete = (content) => {
    setSelectedRowDelete(content);
    setOpenDeleteCourse(!OpenViewCourse);
  };
  const handleModify = (content) => {
    setSelectedRowModify(content);
    setOpenModifyCourse(!OpenViewCourse);
  };

  useEffect(() => {
    getSubCategories();
  }, []);
  // Filter rows based on search query
  const filteredRows = courses.filter(
    (row) =>
      row?.Nomc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row?.Descriptionc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row?.image?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row?.link?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row?.Souscategorie?.Nomsouscategorie.toLowerCase().includes(
        searchQuery.toLowerCase()
      )
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
    <Card className="max-h-[800px] h-fit w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Courses list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about registered courses
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={handleOpenAdd}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Course
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-[85%] mx-auto">
            <Input
              labeyl="Search"
              className="w-full"
              value={searchQuery}
              onChange={handleSearchChange}
              icon={<MagnifyingGlassIcon className="w-4" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
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
            {currentRows.map((content, index) => {
              const isLast = index === currentRows.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              const { id, Nomc, image, link, Descriptionc, Souscategorie } =
                content;
              return (
                <tr key={index}>
                  <td className={classes}>
                    {image ? (
                      <img
                        src={image}
                        alt={image}
                        className="w-7 h-7 rounded-lg"
                      />
                    ) : (
                      <span className="w-7 h-7 rounded-lg bg-blue-900 px-4 py-2"></span>
                    )}
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {wrapText(Nomc, 25)}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {wrapText(Souscategorie.Nomsouscategorie, 25)}
                        </Typography>
                      </div>
                    </div>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <a
                        href={link}
                        className="bg-blue-600 px-2 py-1 rounded-lg underline text-gray-50"
                      >
                        Link
                      </a>
                    </Typography>
                  </td>
                  <td
                    className={
                      classes +
                      " flex flex-row items-center justify-center gap-0"
                    }
                  >
                    {/* <ViewCourse
                      content={content}
                      OpenViewCourse={OpenViewCourse}
                      setOpenViewCourse={setOpenViewCourse}
                    />
                   
                  */}
                    <Tooltip content="More Information">
                      <IconButton
                        onClick={() => handleOpenView(content)}
                        variant="text"
                      >
                        <InformationCircleIcon className="h-6 w-6 text-blue-900" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <IconButton
                        onClick={() => handleOpenDelete(content)}
                        variant="text"
                      >
                        <TrashIcon className="h-6 w-6 text-red-800" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Modify">
                      <IconButton
                        onClick={() => handleModify(content)}
                        variant="text"
                      >
                        <PencilIcon className="h-6 w-6" />
                      </IconButton>
                    </Tooltip>
                  </td>
                  <td className={classes}></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {selectedRowView?.id && (
          <ViewCourse
            content={selectedRowView}
            OpenViewCourse={OpenViewCourse}
            setOpenViewCourse={setOpenViewCourse}
          />
        )}
        {selectedRowDelete?.id && (
          <DeleteCourse
            id={selectedRowDelete?.id}
            OpenDeleteCourse={OpenDeleteCourse}
            setOpenDeleteCourse={setOpenDeleteCourse}
          />
        )}
        {selectedRowModify?.id && (
          <ModifyCourseModel
            id={selectedRowModify?.id}
            content={selectedRowModify}
            OpenModifyCourse={OpenModifyCourse}
            setOpenModifyCourse={setOpenModifyCourse}
          />
        )}

        {OpenAddCourse && (
          <AddCourseModel
            subcategories={subcategories}
            OpenAddCourse={OpenAddCourse}
            setOpenAddCourse={setOpenAddCourse}
          />
        )}
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
      </CardFooter>
    </Card>
  );
}
