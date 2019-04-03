<?php include '_header.php' ?>

<main>
    <section>
        <div class="container">
            <h2>Kim's Portfolio</h2>
            <p class="bs_margin60">Here are some highlights of the projects I've worked on over the past few years! <a href="/">Click here to go back to the home page.</a></p>
            <div class="bs_margin60" id="portfolio"></div>
            <div class="bs_margin60"><a class="button" href="/">&lt; Back To the home page</a></div>
        </div>
    </section>
</main>

<?php include '_footer.php' ?>

<script>
    $.ajax({
        type: 'GET',
        url: 'portfolio.json',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (index) {
                $('#portfolio').append(
                    '<div class="bs_row bs_margin80"><div class="bs_one right-margin bs_margin30"><div>' +
                    '<img src="' + data[index].url + '">' +
                    '</div></div><div class="bs_one bs_verticallyCentered"><div>' +
                    '<h3 class="bs_centeredOnMobile">' + data[index].name + '</h3>' +
                    '<p>' + data[index].description + '</p>' +
                    '</div></div></div>'
                );
            });
        }
    })
</script>