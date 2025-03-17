import Label from "@/components/UI/label";
import DropDownComponent from "./DropDownComponent";
//main page layout for both cartoons and books
export default async function GenrePageComponent({
  children,
  pageTitle,
  filter,
  typeKey,
  label,
  queryKey,
}) {
  return (
    <div className="bg-white rounded-2xl w-full p-7 mt-8 min-h-[92%] ">
      <div className="flex justify-between items-center">
        <Label title={pageTitle} />
        {filter && (
          <DropDownComponent
            type={filter}
            typeKey={typeKey}
            dropdownMenuLabel={label}
            queryKey={queryKey}
            pageTitle={pageTitle}
          />
        )}
      </div>
      <hr className="my-2 fill-custom-blue" />
      {children}
    </div>
  );
}
