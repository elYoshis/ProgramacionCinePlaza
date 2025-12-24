<?php 

require "../vendor/autoload.php";
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\FILL;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Worksheet\PageMargins;
use PhpOffice\PhpSpreadsheet\Worksheet\RowDimension;
require "../login/conn.php";

$fe1=$_GET['fe1'];
$fe2=$_GET['fe2'];

$fii = date_create_from_format('Y-m-d', $fe1);
$fff = date_create_from_format('Y-m-d', $fe2);

$fiii = date_format($fii, "d-m-Y");
$ffff = date_format($fff, "d-m-Y");



$datos = "SELECT p.nombre, p.formato, pr.Nrosala, pr.hora, pr.horafin, pr.fechainicio, pr.fechafinal FROM pelicula p, programacion pr, peliprogra ppgr WHERE p.IDPeli = ppgr.IDPeli AND pr.IDProg = ppgr.IDProg AND pr.fechainicio='".$fe1."' AND pr.fechafinal='".$fe2."' ORDER BY ppgr.IDProg" ;
$resp = mysqli_query($conexion,$datos);

  $ini1=$_GET['ini1'];
  $ini2=$_GET['ini2'];
  $ini3=$_GET['ini3'];
  $ini4=$_GET['ini4'];
  $ini5=$_GET['ini5'];
  $ini6=$_GET['ini6'];
  $ini7=$_GET['ini7'];
  $ini8=$_GET['ini8'];
  $ini9=$_GET['ini9'];
  $ini10=$_GET['ini10'];
  $ini11=$_GET['ini11'];
  $ini12=$_GET['ini12'];
  $ini13=$_GET['ini13'];
  $ini14=$_GET['ini14'];
  $ini15=$_GET['ini15'];
  $ini16=$_GET['ini16'];
  $ini17=$_GET['ini17'];
  $ini18=$_GET['ini18'];
  $ini19=$_GET['ini19'];
  $ini20=$_GET['ini20'];
  $ini21=$_GET['ini21'];
  $ini22=$_GET['ini22'];
  $ini23=$_GET['ini23'];
  $ini24=$_GET['ini24'];
  $ini25=$_GET['ini25'];
  $ini26=$_GET['ini26'];
  $ini27=$_GET['ini27'];
  $ini28=$_GET['ini28'];
  $ini29=$_GET['ini29'];
  $ini30=$_GET['ini30'];

  $fin1=$_GET['fin1'];
  $fin2=$_GET['fin2'];
  $fin3=$_GET['fin3'];
  $fin4=$_GET['fin4'];
  $fin5=$_GET['fin5'];
  $fin6=$_GET['fin6'];
  $fin7=$_GET['fin7'];
  $fin8=$_GET['fin8'];
  $fin9=$_GET['fin9'];
  $fin10=$_GET['fin10'];
  $fin11=$_GET['fin11'];
  $fin12=$_GET['fin12'];
  $fin13=$_GET['fin13'];
  $fin14=$_GET['fin14'];
  $fin15=$_GET['fin15'];
  $fin16=$_GET['fin16'];
  $fin17=$_GET['fin17'];
  $fin18=$_GET['fin18'];
  $fin19=$_GET['fin19'];
  $fin20=$_GET['fin20'];
  $fin21=$_GET['fin21'];
  $fin22=$_GET['fin22'];
  $fin23=$_GET['fin23'];
  $fin24=$_GET['fin24'];
  $fin25=$_GET['fin25'];
  $fin26=$_GET['fin26'];
  $fin27=$_GET['fin27'];
  $fin28=$_GET['fin28'];
  $fin29=$_GET['fin29'];
  $fin30=$_GET['fin30'];

  $s1=$_GET['s1'];
  $s2=$_GET['s2'];
  $s3=$_GET['s3'];
  $s4=$_GET['s4'];
  $s5=$_GET['s5'];
  $s6=$_GET['s6'];
  $s7=$_GET['s7'];
  $s8=$_GET['s8'];
  $s9=$_GET['s9'];
  $s10=$_GET['s10'];
  $s11=$_GET['s11'];
  $s12=$_GET['s12'];
  $s13=$_GET['s13'];
  $s14=$_GET['s14'];
  $s15=$_GET['s15'];
  $s16=$_GET['s16'];
  $s17=$_GET['s17'];
  $s18=$_GET['s18'];
  $s19=$_GET['s19'];
  $s20=$_GET['s20'];
  $s21=$_GET['s21'];
  $s22=$_GET['s22'];
  $s23=$_GET['s23'];
  $s24=$_GET['s24'];
  $s25=$_GET['s25'];
  $s26=$_GET['s26'];
  $s27=$_GET['s27'];
  $s28=$_GET['s28'];
  $s29=$_GET['s29'];
  $s30=$_GET['s30'];


  $info1=$_GET['info1'];
  $info2=$_GET['info2'];
  $info3=$_GET['info3'];
  $info4=$_GET['info4'];
  $info5=$_GET['info5'];
  $info6=$_GET['info6'];
  $info7=$_GET['info7'];
  $info8=$_GET['info8'];
  $info9=$_GET['info9'];
  $info10=$_GET['info10'];
  $info11=$_GET['info11'];
  $info12=$_GET['info12'];
  $info13=$_GET['info13'];
  $info14=$_GET['info14'];

  $t1=$_GET['t1'];
  $t2=$_GET['t2'];
  $t3=$_GET['t3'];
  $t4=$_GET['t4'];
  $t5=$_GET['t5'];
  $t6=$_GET['t6'];
  $t7=$_GET['t7'];
  $t8=$_GET['t8'];
  $t9=$_GET['t9'];
  $t10=$_GET['t10'];
  $t11=$_GET['t11'];
  $t12=$_GET['t12'];
  $t13=$_GET['t13'];
  $t14=$_GET['t14'];

  $cla1=$_GET['cla1'];
  $cla2=$_GET['cla2'];
  $cla3=$_GET['cla3'];
  $cla4=$_GET['cla4'];
  $cla5=$_GET['cla5'];
  $cla6=$_GET['cla6'];
  $cla7=$_GET['cla7'];
  $cla8=$_GET['cla8'];
  $cla9=$_GET['cla9'];
  $cla10=$_GET['cla10'];
  $cla11=$_GET['cla11'];
  $cla12=$_GET['cla12'];
  $cla13=$_GET['cla13'];
  $cla14=$_GET['cla14'];

  $pre1=$_GET['pre1'];
  $pre2=$_GET['pre2'];
  $pre3=$_GET['pre3'];
  $pre4=$_GET['pre4'];
  $pre5=$_GET['pre5'];
  $pre6=$_GET['pre6'];
  $pre7=$_GET['pre7'];
  $pre8=$_GET['pre8'];
  $pre9=$_GET['pre9'];
  $pre10=$_GET['pre10'];
  $pre11=$_GET['pre11'];
  $pre12=$_GET['pre12'];
  $pre13=$_GET['pre13'];
  $pre14=$_GET['pre14'];

  $nro1=$_GET['nro1'];
  $nro2=$_GET['nro2'];
  $nro3=$_GET['nro3'];
  $nro4=$_GET['nro4'];
  $nro5=$_GET['nro5'];
  $nro6=$_GET['nro6'];
  $nro7=$_GET['nro7'];
  $nro8=$_GET['nro8'];
  $nro9=$_GET['nro9'];
  $nro10=$_GET['nro10'];
  $nro11=$_GET['nro11'];
  $nro12=$_GET['nro12'];
  $nro13=$_GET['nro13'];
  $nro14=$_GET['nro14'];

$canti1=$_GET['canti1'];
  $canti2=$_GET['canti2'];
  $canti3=$_GET['canti3'];
  $canti4=$_GET['canti4'];
  $canti5=$_GET['canti5'];
  $canti6=$_GET['canti6'];
  $canti7=$_GET['canti7'];
  $canti8=$_GET['canti8'];
  $canti9=$_GET['canti9'];
  $canti10=$_GET['canti10'];
  $canti11=$_GET['canti11'];
  $canti12=$_GET['canti12'];
  $canti13=$_GET['canti13'];
  $canti14=$_GET['canti14'];


$color1 = [
	'font'=>[
		'color'=>[
			'rgb'=>'000000'
		],
	],
	'fill'=>[
		'fillType' => Fill::FILL_SOLID,
		'startColor'=>[
			'rgb' =>'fcca22'
		]
	],
];
$color2 = [
	'font'=>[
		'color'=>[
			'rgb'=>'000000'
		],
	],
	'fill'=>[
		'fillType' => Fill::FILL_SOLID,
		'startColor'=>[
			'rgb' =>'ffdd6a'
		]
	],
];
$color3 = [
	'font'=>[
		'color'=>[
			'rgb'=>'000000'
		],
	],
	'fill'=>[
		'fillType' => Fill::FILL_SOLID,
		'startColor'=>[
			'rgb' =>'6aff81'
		]
	],
];
$color4 = [
	'font'=>[
		'color'=>[
			'rgb'=>'000000'
		],
	],
	'fill'=>[
		'fillType' => Fill::FILL_SOLID,
		'startColor'=>[
			'rgb' =>'9efcfa'
		]
	],
];


$documento = new Spreadsheet();
$hoja = $documento->getActiveSheet();
$documento
    ->getProperties()
    ->setCreator("Jose Cortez")
    ->setLastModifiedBy('Jose Cortez') // última vez modificado por
    ->setTitle('Programacion')
    ->setSubject('Programa semanal del cine')
    ->setDescription('Este documento es la programacion semanal del cine')
    ->setKeywords('programacion cine plaza multicine')
    ->setCategory('Entretenimiento');
$documento->getDefaultStyle()
    ->getFont()
    ->setName('Arial')
    ->setSize(10.5)
    ->setBold( true );
 
$drawing = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
$drawing->setName('MULTICINES');
$drawing->setDescription('MULTICINES');
$drawing->setPath('LogoCine2.png'); // put your path and image here
$drawing->setCoordinates('B1');

$drawing->setWidthAndHeight(300,300);

$drawing->getShadow()->setVisible(true);

$drawing->setWorksheet($hoja);


$hoja->getPageSetup()->setOrientation(\PhpOffice\PhpSpreadsheet\Worksheet\PageSetup::ORIENTATION_LANDSCAPE);
$hoja->getPageSetup()->setPaperSize(\PhpOffice\PhpSpreadsheet\Worksheet\PageSetup::PAPERSIZE_LETTER);
$hoja->getPageSetup()->setFitToWidth(1);
$hoja->getPageSetup()->setFitToHeight(0);
$hoja->getPageMargins()->setTop(1);
$hoja->getPageMargins()->setRight(0.40);
$hoja->getPageMargins()->setLeft(0.40);
$hoja->getPageMargins()->setBottom(1);


$hoja->setTitle("Programacion Semanal");
$hoja->setCellValue('A10','MULTICINES PLAZA');
$hoja->mergeCells('A10:F10');
$hoja->getStyle('A10')->getFont()->setSize(15);
$hoja->getStyle('A10')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('A11','PROGRAMACION SEMANAL');
$hoja->mergeCells('A11:F11');
$hoja->getStyle('A11')->getFont()->setSize(15);
$hoja->getStyle('A11')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('A12','Del '. $fiii. ' hasta el ' .$ffff);
$hoja->mergeCells('A12:F12');
$hoja->getStyle('A12')->getFont()->setSize(15);
$hoja->getStyle('A12')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->getColumnDimension('A')->setWidth(12);
$hoja->getColumnDimension('B')->setWidth(12);
$hoja->getColumnDimension('C')->setWidth(12);
$hoja->getColumnDimension('D')->setWidth(12);
$hoja->getColumnDimension('E')->setWidth(12);
$hoja->getColumnDimension('F')->setWidth(12);

$hoja->getColumnDimension('H')->setWidth(5);
$hoja->getColumnDimension('I')->setWidth(30);
$hoja->getColumnDimension('J')->setWidth(13);
$hoja->getColumnDimension('K')->setWidth(12);
$hoja->getColumnDimension('L')->setWidth(10);
$hoja->getColumnDimension('M')->setWidth(10);

$hoja->getStyle('A10:F13')->getFont()->setBold(true);
$hoja->getStyle('H13:M13')->getFont()->setBold(true);


$hoja->setCellValue('A13', 'SALA 1');
$hoja->mergeCells('A13:B13');
$hoja->getStyle('A13')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C13', 'SALA 2');
$hoja->mergeCells('C13:D13');
$hoja->getStyle('C13')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E13', 'SALA 3');
$hoja->mergeCells('E13:F13');
$hoja->getStyle('E13')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->getStyle('A13:F13')->applyFromArray($color3);

$hoja->getStyle('B15')->applyFromArray($color4);
$hoja->getStyle('D15')->applyFromArray($color4);
$hoja->getStyle('F15')->applyFromArray($color4);
$hoja->getStyle('B17')->applyFromArray($color4);
$hoja->getStyle('D17')->applyFromArray($color4);
$hoja->getStyle('F17')->applyFromArray($color4);
$hoja->getStyle('B19')->applyFromArray($color4);
$hoja->getStyle('D19')->applyFromArray($color4);
$hoja->getStyle('F19')->applyFromArray($color4);
$hoja->getStyle('B21')->applyFromArray($color4);
$hoja->getStyle('D21')->applyFromArray($color4);
$hoja->getStyle('F21')->applyFromArray($color4);
$hoja->getStyle('B23')->applyFromArray($color4);
$hoja->getStyle('D23')->applyFromArray($color4);
$hoja->getStyle('F23')->applyFromArray($color4);
$hoja->getStyle('B25')->applyFromArray($color4);
$hoja->getStyle('D25')->applyFromArray($color4);
$hoja->getStyle('F25')->applyFromArray($color4);
$hoja->getStyle('B27')->applyFromArray($color4);
$hoja->getStyle('D27')->applyFromArray($color4);
$hoja->getStyle('F27')->applyFromArray($color4);
$hoja->getStyle('B29')->applyFromArray($color4);
$hoja->getStyle('D29')->applyFromArray($color4);
$hoja->getStyle('F29')->applyFromArray($color4);
$hoja->getStyle('B31')->applyFromArray($color4);
$hoja->getStyle('D31')->applyFromArray($color4);
$hoja->getStyle('F31')->applyFromArray($color4);
$hoja->getStyle('B33')->applyFromArray($color4);
$hoja->getStyle('D33')->applyFromArray($color4);
$hoja->getStyle('F33')->applyFromArray($color4);
$hoja->getStyle('A13:F33')->getBorders()->applyFromArray( [ 'allBorders' => [ 'borderStyle' => Border::BORDER_THIN, 'color' => [ 'rgb' => '000000' ] ] ] );

$hoja->getStyle('H13:M27')->getBorders()->applyFromArray( [ 'allBorders' => [ 'borderStyle' => Border::BORDER_THIN, 'color' => [ 'rgb' => '000000' ] ] ] );

$hoja->getRowDimension(14)->setRowHeight(27);

$hoja->getRowDimension(16)->setRowHeight(27);

$hoja->getRowDimension(18)->setRowHeight(27);

$hoja->getRowDimension(20)->setRowHeight(27);

$hoja->getRowDimension(22)->setRowHeight(27);

$hoja->getRowDimension(24)->setRowHeight(27);

$hoja->getRowDimension(26)->setRowHeight(27);

$hoja->getRowDimension(28)->setRowHeight(27);

$hoja->getRowDimension(30)->setRowHeight(27);

$hoja->getRowDimension(32)->setRowHeight(27);



$hoja->getStyle('A14')->getAlignment()->setWrapText(true);
$hoja->getStyle('C14')->getAlignment()->setWrapText(true);
$hoja->getStyle('E14')->getAlignment()->setWrapText(true);
$hoja->getStyle('A16')->getAlignment()->setWrapText(true);
$hoja->getStyle('C16')->getAlignment()->setWrapText(true);
$hoja->getStyle('E16')->getAlignment()->setWrapText(true);
$hoja->getStyle('A18')->getAlignment()->setWrapText(true);
$hoja->getStyle('C18')->getAlignment()->setWrapText(true);
$hoja->getStyle('E18')->getAlignment()->setWrapText(true);
$hoja->getStyle('A20')->getAlignment()->setWrapText(true);
$hoja->getStyle('C20')->getAlignment()->setWrapText(true);
$hoja->getStyle('E20')->getAlignment()->setWrapText(true);
$hoja->getStyle('A22')->getAlignment()->setWrapText(true);
$hoja->getStyle('C22')->getAlignment()->setWrapText(true);
$hoja->getStyle('E22')->getAlignment()->setWrapText(true);
$hoja->getStyle('A24')->getAlignment()->setWrapText(true);
$hoja->getStyle('C24')->getAlignment()->setWrapText(true);
$hoja->getStyle('E24')->getAlignment()->setWrapText(true);
$hoja->getStyle('A26')->getAlignment()->setWrapText(true);
$hoja->getStyle('C26')->getAlignment()->setWrapText(true);
$hoja->getStyle('E26')->getAlignment()->setWrapText(true);
$hoja->getStyle('A28')->getAlignment()->setWrapText(true);
$hoja->getStyle('C28')->getAlignment()->setWrapText(true);
$hoja->getStyle('E28')->getAlignment()->setWrapText(true);
$hoja->getStyle('A30')->getAlignment()->setWrapText(true);
$hoja->getStyle('C30')->getAlignment()->setWrapText(true);
$hoja->getStyle('E30')->getAlignment()->setWrapText(true);
$hoja->getStyle('A32')->getAlignment()->setWrapText(true);
$hoja->getStyle('C32')->getAlignment()->setWrapText(true);
$hoja->getStyle('E32')->getAlignment()->setWrapText(true);

$hoja->setCellValue('A14', $s1);

$hoja->mergeCells('A14:B14');
$hoja->getStyle('A14')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('C14', $s2);
$hoja->mergeCells('C14:D14');
$hoja->getStyle('C14')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E14', $s3);
$hoja->mergeCells('E14:F14');
$hoja->getStyle('E14')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A15', $ini1);
$hoja->getStyle('A15')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B15', $fin1);
$hoja->getStyle('B15')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C15', $ini2);
$hoja->getStyle('C15')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D15', $fin2);
$hoja->getStyle('D15')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E15', $ini3);
$hoja->getStyle('E15')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F15', $fin3);
$hoja->getStyle('F15')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A16', $s4);
$hoja->mergeCells('A16:B16');
$hoja->getStyle('A16')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C16', $s5);
$hoja->mergeCells('C16:D16');
$hoja->getStyle('C16')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E16', $s6);
$hoja->mergeCells('E16:F16');
$hoja->getStyle('E16')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A17', $ini4);
$hoja->getStyle('A17')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B17', $fin4);
$hoja->getStyle('B17')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C17', $ini5);
$hoja->getStyle('C17')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D17', $fin5);
$hoja->getStyle('D17')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E17', $ini6);
$hoja->getStyle('E17')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F17', $fin6);
$hoja->getStyle('F17')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A18', $s7);
$hoja->mergeCells('A18:B18');
$hoja->getStyle('A18')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C18', $s8);
$hoja->mergeCells('C18:D18');
$hoja->getStyle('C18')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E18', $s9);
$hoja->mergeCells('E18:F18');
$hoja->getStyle('E18')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A19', $ini7);
$hoja->getStyle('A19')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B19', $fin7);
$hoja->getStyle('B19')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C19', $ini8);
$hoja->getStyle('C19')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D19', $fin8);
$hoja->getStyle('D19')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E19', $ini9);
$hoja->getStyle('E19')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F19', $fin9);
$hoja->getStyle('F19')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A20', $s10);
$hoja->mergeCells('A20:B20');
$hoja->getStyle('A20')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C20', $s11);
$hoja->mergeCells('C20:D20');
$hoja->getStyle('C20')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E20', $s12);
$hoja->mergeCells('E20:F20');
$hoja->getStyle('E20')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A21', $ini10);
$hoja->getStyle('A21')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B21', $fin10);
$hoja->getStyle('B21')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C21', $ini11);
$hoja->getStyle('C21')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D21', $fin11);
$hoja->getStyle('D21')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E21', $ini12);
$hoja->getStyle('E21')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F21', $fin12);
$hoja->getStyle('F21')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A22', $s13);
$hoja->mergeCells('A22:B22');
$hoja->getStyle('A22')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C22', $s14);
$hoja->mergeCells('C22:D22');
$hoja->getStyle('C22')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E22', $s15);
$hoja->mergeCells('E22:F22');
$hoja->getStyle('E22')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A23', $ini13);
$hoja->getStyle('A23')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B23', $fin13);
$hoja->getStyle('B23')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C23', $ini14);
$hoja->getStyle('C23')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D23', $fin14);
$hoja->getStyle('D23')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E23', $ini15);
$hoja->getStyle('E23')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F23', $fin15);
$hoja->getStyle('F23')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A24', $s16);
$hoja->mergeCells('A24:B24');
$hoja->getStyle('A24')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C24', $s17);
$hoja->mergeCells('C24:D24');
$hoja->getStyle('C24')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E24', $s18);
$hoja->mergeCells('E24:F24');
$hoja->getStyle('E24')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A25', $ini16);
$hoja->getStyle('A25')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B25', $fin16);
$hoja->getStyle('B25')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C25', $ini17);
$hoja->getStyle('C25')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D25', $fin17);
$hoja->getStyle('D25')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E25', $ini18);
$hoja->getStyle('E25')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F25', $fin18);
$hoja->getStyle('F25')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A26', $s19);
$hoja->mergeCells('A26:B26');
$hoja->getStyle('A26')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C26', $s20);
$hoja->mergeCells('C26:D26');
$hoja->getStyle('C26')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E26', $s21);
$hoja->mergeCells('E26:F26');
$hoja->getStyle('E26')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A27', $ini19);
$hoja->getStyle('A27')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B27', $fin19);
$hoja->getStyle('B27')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C27', $ini20);
$hoja->getStyle('C27')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D27', $fin20);
$hoja->getStyle('D27')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E27', $ini21);
$hoja->getStyle('E27')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F27', $fin21);
$hoja->getStyle('F27')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A28', $s22);
$hoja->mergeCells('A28:B28');
$hoja->getStyle('A28')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C28', $s23);
$hoja->mergeCells('C28:D28');
$hoja->getStyle('C28')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E28', $s24);
$hoja->mergeCells('E28:F28');
$hoja->getStyle('E28')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A29', $ini22);
$hoja->getStyle('A29')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B29', $fin22);
$hoja->getStyle('B29')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C29', $ini23);
$hoja->getStyle('C29')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D29', $fin23);
$hoja->getStyle('D29')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E29', $ini24);
$hoja->getStyle('E29')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F29', $fin24);
$hoja->getStyle('F29')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A30', $s25);
$hoja->mergeCells('A30:B30');
$hoja->getStyle('A30')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C30', $s26);
$hoja->mergeCells('C30:D30');
$hoja->getStyle('C30')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E30', $s27);
$hoja->mergeCells('E30:F30');
$hoja->getStyle('E30')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A31', $ini25);
$hoja->getStyle('A31')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B31', $fin25);
$hoja->getStyle('B31')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C31', $ini26);
$hoja->getStyle('C31')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D31', $fin26);
$hoja->getStyle('D31')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E31', $ini27);
$hoja->getStyle('E31')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F31', $fin27);
$hoja->getStyle('F31')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A32', $s28);
$hoja->mergeCells('A32:B32');
$hoja->getStyle('A32')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C32', $s29);
$hoja->mergeCells('C32:D32');
$hoja->getStyle('C32')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E32', $s30);
$hoja->mergeCells('E32:F32');
$hoja->getStyle('E32')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('A33', $ini28);
$hoja->getStyle('A33')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('B33', $fin28);
$hoja->getStyle('B33')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('C33', $ini29);
$hoja->getStyle('C33')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('D33', $fin29);
$hoja->getStyle('D33')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('E33', $ini30);
$hoja->getStyle('E33')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
$hoja->setCellValue('F33', $fin30);
$hoja->getStyle('F33')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

$hoja->setCellValue('H13','#');
$hoja->setCellValue('I13','Pelicula');
$hoja->setCellValue('J13','Duracion(min)');
$hoja->setCellValue('K13','Clasificacion');
$hoja->setCellValue('L13','Precio');
$hoja->setCellValue('M13','Nro Sem');

$hoja->setCellValue('H14',$canti1);
$hoja->setCellValue('H15',$canti2);
$hoja->setCellValue('H16',$canti3);
$hoja->setCellValue('H17',$canti4);
$hoja->setCellValue('H18',$canti5);
$hoja->setCellValue('H19',$canti6);
$hoja->setCellValue('H20',$canti7);
$hoja->setCellValue('H21',$canti8);
$hoja->setCellValue('H22',$canti9);
$hoja->setCellValue('H23',$canti10);
$hoja->setCellValue('H24',$canti11);
$hoja->setCellValue('H25',$canti12);


$hoja->setCellValue('I14',$info1);
$hoja->setCellValue('I15',$info2);
$hoja->setCellValue('I16',$info3);
$hoja->setCellValue('I17',$info4);
$hoja->setCellValue('I18',$info5);
$hoja->setCellValue('I19',$info6);
$hoja->setCellValue('I20',$info7);
$hoja->setCellValue('I21',$info8);
$hoja->setCellValue('I22',$info9);
$hoja->setCellValue('I23',$info10);
$hoja->setCellValue('I24',$info11);
$hoja->setCellValue('I25',$info12);

$hoja->setCellValue('J14',$t1);
$hoja->setCellValue('J15',$t2);
$hoja->setCellValue('J16',$t3);
$hoja->setCellValue('J17',$t4);
$hoja->setCellValue('J18',$t5);
$hoja->setCellValue('J19',$t6);
$hoja->setCellValue('J20',$t7);
$hoja->setCellValue('J21',$t8);
$hoja->setCellValue('J22',$t9);
$hoja->setCellValue('J23',$t10);
$hoja->setCellValue('J24',$t11);
$hoja->setCellValue('J25',$t12);

$hoja->setCellValue('K14',$cla1);
$hoja->setCellValue('K15',$cla2);
$hoja->setCellValue('K16',$cla3);
$hoja->setCellValue('K17',$cla4);
$hoja->setCellValue('K18',$cla5);
$hoja->setCellValue('K19',$cla6);
$hoja->setCellValue('K20',$cla7);
$hoja->setCellValue('K21',$cla8);
$hoja->setCellValue('K22',$cla9);
$hoja->setCellValue('K23',$cla10);
$hoja->setCellValue('K24',$cla11);
$hoja->setCellValue('K25',$cla12);

$hoja->setCellValue('L14',$pre1);
$hoja->setCellValue('L15',$pre2);
$hoja->setCellValue('L16',$pre3);
$hoja->setCellValue('L17',$pre4);
$hoja->setCellValue('L18',$pre5);
$hoja->setCellValue('L19',$pre6);
$hoja->setCellValue('L20',$pre7);
$hoja->setCellValue('L21',$pre8);
$hoja->setCellValue('L22',$pre9);
$hoja->setCellValue('L23',$pre10);
$hoja->setCellValue('L24',$pre11);
$hoja->setCellValue('L25',$pre12);

$hoja->setCellValue('M14',$nro1);
$hoja->setCellValue('M15',$nro2);
$hoja->setCellValue('M16',$nro3);
$hoja->setCellValue('M17',$nro4);
$hoja->setCellValue('M18',$nro5);
$hoja->setCellValue('M19',$nro6);
$hoja->setCellValue('M20',$nro7);
$hoja->setCellValue('M21',$nro8);
$hoja->setCellValue('M22',$nro9);
$hoja->setCellValue('M23',$nro10);
$hoja->setCellValue('M24',$nro11);
$hoja->setCellValue('M25',$nro12);


$hoja->getStyle('H13:M13')->applyFromArray($color1);
$hoja->getStyle('H14:M14')->applyFromArray($color2);
$hoja->getStyle('H15:M15')->applyFromArray($color1);
$hoja->getStyle('H16:M16')->applyFromArray($color2);
$hoja->getStyle('H17:M17')->applyFromArray($color1);
$hoja->getStyle('H18:M18')->applyFromArray($color2);
$hoja->getStyle('H19:M19')->applyFromArray($color1);
$hoja->getStyle('H20:M20')->applyFromArray($color2);
$hoja->getStyle('H21:M21')->applyFromArray($color1);
$hoja->getStyle('H22:M22')->applyFromArray($color2);
$hoja->getStyle('H23:M23')->applyFromArray($color1);
$hoja->getStyle('H24:M24')->applyFromArray($color2);
$hoja->getStyle('H25:M25')->applyFromArray($color1);
$hoja->getStyle('H26:M26')->applyFromArray($color2);
$hoja->getStyle('H27:M27')->applyFromArray($color1);


/**
 * Los siguientes encabezados son necesarios para que
 * el navegador entienda que no le estamos mandando
 * simple HTML
 * Por cierto: no hagas ningún echo ni cosas de esas; es decir, no imprimas nada
 */
 
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="cartelera.xlsx"');

 
$writer = IOFactory::createWriter($documento, 'Xlsx');
$writer->save('php://output');
exit;
?>