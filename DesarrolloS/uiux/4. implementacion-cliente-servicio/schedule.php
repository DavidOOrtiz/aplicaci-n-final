<html>
    <head>
        <title>Schedule</title>
    </head>
    <body>
        
        <?php 
            $fechaCita = $_POST["fechaCita"];
            $tipoCita = $_POST["tipoCita"];
            $horaCita = $_POST["horaCita"];
            
        ?>
            
            <h1>Detalles de la cita:</h1>
            Fecha de la cita: <?php echo $fechaCita; ?>
            Tipo de cita: <?php echo $tipoCita; ?>
            Hora de la cita: <?php echo $horaCita; ?>
                    

        <h1>Agenta Tu cita de dientes</h1>
        <form action="">
            Fecha Cita <input type="date" name="fechaCita" value="<?php echo $fechaCita; ?>" />
            <hr/>
            
            Tipo de Cita
            <select name="tipoCita">
                <option value="LIMD">Limpieza Dental</option>
                <option value="ORT">Ortodoncia</option>
                <option value="CARI">Caries</option>
                <option value="DIS">Diseño de Sonrisa</option>
                <option value="BLA">Blanqueamiento Dental</option>

            </select>
            Hora Cita
            <select name="horaCita">
                <option value="08:00">08:00 a.m</option>
                <option value="09:00">09:00 a.m</option>
                <option value="10:00">10:00 a.m</option>
                <option value="11:00">11:00 a.m</option>
                <option value="02:00">02:00 p.m</option>
                <option value="03:00">03:00 p.m</option>
                <option value="04:00">04:00 p.m</option>
            </select>
            <input type="submit" value="Guardar">
    </body>
</html>