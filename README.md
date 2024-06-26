# CounterAtomic App

Этот проект представляет собой счетчик, реализованный с использованием атомарного дизайна и технологий Next.js и TypeScript.

## Структура проекта

Проект разделен на четыре уровня атомарного дизайна:

1. **Атомы**:
   - Button: Компонент кнопки.
   - Text: Компонент текста.
2. **Молекулы**:
   - ButtonText: Компонент, который объединяет кнопку и текст.
3. **Организмы**:
   - CounterProvider: Контекстный провайдер для управления состоянием счетчика.
   - IncrementButton: Кнопка для увеличения значения счетчика.
   - DecrementButton: Кнопка для уменьшения значения счетчика.
4. **Представления**:
   - CounterView: Компонент, который показывает счетчик и кнопки увеличения и уменьшения.

## Установка

Для установки проекта выполните следующие шаги:

1. Клонируйте репозиторий:
   git clone https://github.com/uwuK1rill/CounterAtomic

2. Перейдите в директорию проекта:
   cd atomiccounter-app

3. Установите зависимости:
   npm install

4. Запустите выполнив следующую команду:
   npm run dev

5. Проект будет доступен по адресу http://localhost:3000
