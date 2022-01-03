import React from "react";
import Title from "components/ui/Title";
import categoriesData from "api/categories.json";
import Category from "components/ui/Category";
/* function */
const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    //
    setCategories(categoriesData);
  }, []);

  return (
    <div className="container mx-auto p-2 lg:px-28 lg:py-4">
      <Title>Kategoriler</Title>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 flex-wrap gap-x-5 gap-y-3 mt-5">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
