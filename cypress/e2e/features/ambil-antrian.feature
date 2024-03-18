Feature: Role sebagai admin antrian
Background: 
    Given an user login as Admin Antrian

@focus @positive
Scenario: Pasien mengambil nomor antrian
    When Pasien mengambil nomor antrian pada mesin tiket
    Then Pasien menerima nomor antrian