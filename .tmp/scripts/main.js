$(document).ready(function () {
    //navigation
    $('#trigger').click(function () {
        $('#menu').toggleClass('open');
        $('#trigger').toggleClass('open');
    });
    $('.nav-link').click(function () {
        $('#menu').removeClass('open');
        $('#trigger').removeClass('open');
        $('#toggle').prop('checked', false);
    });

    //change hamburger menu color on scroll
    var offset = $('#what').offset().top;
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= offset) {
                $('#trigger').addClass('black');
            } else {
                $('#trigger').removeClass('black');
            }
        });
    });

    //show/hide reviews
    $('#openReviews').click(function () {
        $('#reviews').addClass('open');
        console.log('kim');
    });
    $('#closeReviews').click(function () {
        $('#reviews').removeClass('open');
    });

    //logos
    $.ajax({
        type: 'GET',
        url: 'logos.json',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (index) {
                $('#logos').append('<div class="bs_one logo ' + data[index].category + '"><img src="' + data[index].url + '"></div>');
            });
            //sorting
            var $sort = $('.sort');
            var $logo = $('.logo');
            $sort.click(function () {
                var $this = $(this);
                $sort.addClass('inactive');
                $this.removeClass('inactive');
                var currentCategory = $this.data('category');
                $logo.addClass('bs_hide');
                $('.' + currentCategory).removeClass('bs_hide');
                if (currentCategory === 'all') $logo.removeClass('bs_hide');
            });
        }
    });

    //smoke effect
    var camera, scene, renderer, geometry, material, mesh;

    init();
    animate();

    function init() {
        clock = new THREE.Clock();

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x000000, .1);
        renderer.setSize(window.innerWidth, window.innerHeight);

        scene = new THREE.Scene();

        var ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;
        scene.add(camera);

        geometry = new THREE.CubeGeometry(200, 200, 200);
        material = new THREE.MeshLambertMaterial({
            color: 0xf8cb8a,
            wireframe: false
        });
        mesh = new THREE.Mesh(geometry, material);
        //scene.add( mesh );
        cubeSineDriver = 0;
        smokeTexture = THREE.ImageUtils.loadTexture('images/smoke.png');
        smokeMaterial = new THREE.MeshLambertMaterial({
            color: 0xf8cb8a,
            opacity: 0.15,
            map: smokeTexture,
            transparent: true
        });
        smokeGeo = new THREE.PlaneGeometry(300, 300);
        smokeParticles = [];

        for (p = 0; p < 150; p++) {
            var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
            particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
            particle.rotation.z = Math.random() * 360;
            scene.add(particle);
            smokeParticles.push(particle);
        }

        document.getElementById('smoke').appendChild(renderer.domElement);
    }

    function animate() {
        delta = clock.getDelta();
        requestAnimationFrame(animate);
        evolveSmoke();
        render();
    }

    function evolveSmoke() {
        var sp = smokeParticles.length;
        while (sp--) {
            smokeParticles[sp].rotation.z += delta * 0.2;
        }
    }

    function render() {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
        cubeSineDriver += 0.01;
        mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
        renderer.render(scene, camera);
    }

    // Smooth scroll to anchor links
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(':focus')) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });
});
//# sourceMappingURL=main.js.map
