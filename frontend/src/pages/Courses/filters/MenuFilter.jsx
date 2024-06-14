import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";

export default function MenuFilter() {
  const categories = [
    { id: 1, name: "Development" },
    { id: 2, name: "Data Science" },
    { id: 3, name: "Artificial Intelligence" },
    { id: 4, name: "Cyber Security" },
    { id: 5, name: "Cyber Security1" },
    { id: 6, name: "Cyber Security2" },
    { id: 7, name: "Cyber Security3" },
  ];
  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}
    >
      <MenuHandler>
        <Button className="px-8">Sub-Categories</Button>
      </MenuHandler>
      <MenuList className="max-h-48 p-5">
        {categories.length > 0 &&
          categories.map((category) => (
            <MenuItem key={category.id} className="p-0">
              <label
                htmlFor="item-1"
                className="flex cursor-pointer items-center gap-2 p-2"
              >
                <Checkbox
                  ripple={false}
                  id="item-1"
                  onChange={(e) => console.log(e)}
                  containerProps={{ className: "p-0" }}
                  className="hover:before:content-none"
                />
                {category.name}
              </label>
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
}
