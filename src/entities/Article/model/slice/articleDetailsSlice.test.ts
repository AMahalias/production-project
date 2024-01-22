import { articleDetailsReducer } from './articleDetailsSlice';
import { Article, ArticleDetailsSchema } from 'entities/Article'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'

const article = {
  "id": "1",
  "title": "Javascript news",
  "subtitle": "What's new in JS 2020?",
  "img": "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  "views": 1022,
  "createdAt": "20.06.2022",
  "type": "IT",
  "blocks": [
    {
      "id": "1",
      "type": "TEXT",
      "title": "Заголовок этого блока",
      "paragraphs": [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
      ]
    },
    {
      "id": "4",
      "type": "CODE",
      "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    },
    {
      "id": "5",
      "type": "TEXT",
      "title": "Заголовок этого блока",
      "paragraphs": [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
      ]
    },
  ]
}

describe('articleDetailsSlice.test', () => {
  test('test fetchArticleById pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {isLoading: false};
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending
    )).toEqual({ isLoading: true, error: undefined })
  });

  test('test fetchArticleById fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true
    };
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      // @ts-ignore
      fetchArticleById.fulfilled(article, '1')
    )).toEqual({
      isLoading: false,
      error: undefined,
      data: article,
    })
  });
});
