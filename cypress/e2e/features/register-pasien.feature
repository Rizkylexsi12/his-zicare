Feature: Role sebagai FO Rajal
Background: 
    Given an user login as FO Rajal

@focus @positive
Scenario: FO Rajal melakukan register data pasien dan memilih dokter
    When Pasien mendatangi FO Rajal sesuai nomor antrian
    # And FO Rajal melakukan input data pasien
    # And FO Rajal memilih dokter untuk pasien
    # Then Pasien menerima surat kunjungan untuk dokter