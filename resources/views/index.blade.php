<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Hotwear</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script type="module" src="{{ url('js/main.js') }}"></script>
</head>

<body>
    <div>
        <div class="kategoria_article">
        </div>
    </div>
    <div>
        <div class="kategoria_article">
        </div>
        <div>
            <table class="receptek_article">
                <tr>
                    <th>Recept</th>
                    <th>Kategória</th>
                </tr>
            </table>
        </div>
        <div class = "recept_article">
            
        </div>
    </div>
</body>

</html>