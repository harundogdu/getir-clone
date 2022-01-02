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
    <div className="container mx-auto px-28 py-4">
      <Title>Kategoriler</Title>
      <div className="flex grid-cols-10 flex-wrap gap-x-5 gap-y-3 mt-5">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
