import { Dispatch, memo, SetStateAction, useCallback } from 'react'

import { Category } from 'types/CategoryType'

import { ButtonCategory, CategoriesList } from './styles'

interface ICategoriesProps {
  categories: Category[] | undefined
  fetchCategory: (id: number) => void
  setCategoryValue?: Dispatch<SetStateAction<string>>
}

const Categories: React.FC<ICategoriesProps> = ({
  categories,
  fetchCategory,
  setCategoryValue,
}) => {
  const handleCategoryButton = useCallback(
    (categoryId: number, categoryValue: string) => {
      fetchCategory(categoryId)
      if (setCategoryValue) setCategoryValue(categoryValue)
    },
    [fetchCategory, setCategoryValue],
  )

  return (
    <div className="mb-4">
      <CategoriesList>
        {categories?.map((category) => (
          <ButtonCategory
            key={category.id}
            type="button"
            onClick={() => handleCategoryButton(category.id, category.label)}
          >
            {category.label}
          </ButtonCategory>
        ))}
      </CategoriesList>
    </div>
  )
}

export default memo(Categories)
