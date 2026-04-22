import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posty'),
      S.documentTypeListItem('category').title('Kategorie'),
      S.documentTypeListItem('imageGallery').title('Zdjęcia'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'imageGallery'].includes(item.getId()!),
      ),
    ])
