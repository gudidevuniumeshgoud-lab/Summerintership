import Button from "./Button";
import SearchBar from "./SearchBar";

function PageHeader({
  title,
  buttonText,
  onButtonClick,
  searchValue,
  onSearch,
}) {

  return (

    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">

      <h1 className="text-3xl font-bold">

        {title}

      </h1>

      <div className="flex gap-4 flex-col md:flex-row">

        <SearchBar

          value={searchValue}

          onChange={onSearch}

        />

        <Button onClick={onButtonClick}>

          {buttonText}

        </Button>

      </div>

    </div>

  );

}

export default PageHeader;